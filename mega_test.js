
import fs from 'fs';

const CHAT_PATH = new URL('./src/pages/api/chat.ts', import.meta.url);

// --- HELPERS ---

// Extract blocks from chat.ts
function extractBlocks() {
  const content = fs.readFileSync(CHAT_PATH, 'utf8');
  const arrayMatch = content.match(/const LOCAL_KNOWLEDGE = (\[[\s\S]*?\]);/);
  if (!arrayMatch) return [];
  const knowledgeContent = arrayMatch[1];
  const blocksArray = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < knowledgeContent.length; i++) {
    if (knowledgeContent[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (knowledgeContent[i] === '}') {
      depth--;
      if (depth === 0) blocksArray.push(knowledgeContent.substring(start, i + 1));
    }
  }
  return blocksArray.map((str, idx) => {
    const kwMatch = str.match(/keywords:\s*\[([\s\S]*?)\]/);
    // Cleaner keyword extraction: split by comma and remove quotes/brackets/newlines
    const rawKws = kwMatch ? kwMatch[1].split(',') : [];
    const kws = rawKws.map(s => s.trim().replace(/['"\[\]]/g, '')).filter(k => k && k.length > 0 && k !== ']');
    const isTechnical = str.includes('isTechnical: true');
    return { str, kws, isTechnical, index: idx };
  });
}

const NOISE_WORDS = ['de', 'la', 'el', 'en', 'por', 'con', 'para', 'mi', 'me', 'te', 'se', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas', 'que', 'si', 'y', 'o', 'u', 'a', 'al', 'del', 'su', 'sus', 'tu', 'tus', 'hola', 'buenas', 'tardes', 'dias', 'noches', 'adios', 'hasta', 'luego', 'ayuda', 'ayudar', 'informacion', 'necesito', 'necesitar', 'donde', 'duda', 'saber', 'quiero', 'ver', 'dime', 'sobre', 'mas', 'esta', 'cosa', 'mal', 'asco', 'tiempo', 'vaya', 'mierda', 'leyes', 'inicio', 'todos', 'lista', 'cuales', 'ofreceis', 'modelos', 'variedad', 'stock', 'gama', 'tipos', 'aprender', 'novedades', 'blog', 'leer', 'articulos', 'noticias', 'actualidad', 'finca', 'campo', 'agricola', 'fincas', 'problema', 'que hago', 'solucion', 'gracias', 'tema', 'favor', 'puedes', 'hacer', 'algo', 'tal', 'pasa', 'buen', 'buenos', 'mejor', 'tengo', 'tiene', 'hectareas', 'hectarea', 'cuantas', 'muchas', 'pocas', 'explotacion', 'cultivo', 'trabajas'];

function normalize(text) {
  return text.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.,?!¿¡]/g, '')
    .split(/\s+/)
    .filter(w => !NOISE_WORDS.includes(w))
    .join(' ')
    .trim()
    .replace(/\s+/g, ' ');
}

const blocks = extractBlocks();

function getMatch(message) {
  const rawClean = normalize(message);
  const cleanMsg = ' ' + rawClean + ' ';
  const fuzzyMsg = ' ' + rawClean.split(/\s+/).map((w) => w.length > 5 ? w.slice(0, -1) : w).join(' ') + ' ';

  let foundIndex = -1;
  let maxMatches = 0;

  for (let i = blocks.length - 1; i >= 0; i--) {
    let score = 0;
    const item = blocks[i];
    item.kws.forEach(kw => {
      const normalizedKw = normalize(kw);
      if (!normalizedKw) return;
      if (cleanMsg.includes(' ' + normalizedKw + ' ') || fuzzyMsg.includes(' ' + normalizedKw + ' ')) {
        const kwScore = Math.pow(normalizedKw.length, 2);
        if (kwScore > score) score = kwScore;
      }
    });

    if (rawClean.length < 2 && !item.keywords.some(kw => normalize(kw) === rawClean)) {
      continue;
    }

    const technicalBoost = item.isTechnical ? 1000 : 0;
    const finalScore = score > 0 ? score + technicalBoost : 0;

    if (finalScore > maxMatches && finalScore > 0) {
      maxMatches = finalScore;
      foundIndex = i;
    }
  }
  return foundIndex;
}

// --- TEST SUITE ---
const testPhrases = [
  (kw) => kw,
  (kw) => `necesito informacion sobre ${kw}`,
  (kw) => `¿me puedes ayudar con el tema de ${kw} por favor?`,
  (kw) => `quiero saber mas de ${kw} para mi finca`,
  (kw) => `dime algo sobre ${kw}`
];

console.log("🚀 Iniciando MEGA TEST de AgroAI...");
console.log(`Cargados ${blocks.length} bloques con ${blocks.reduce((a, b) => a + b.kws.length, 0)} keywords.`);

let totalTests = 0;
let totalErrors = 0;
const errorLog = [];

blocks.forEach((block, bIdx) => {
  block.kws.forEach(kw => {
    testPhrases.forEach((phraseGen, pIdx) => {
      const testMsg = phraseGen(kw);
      totalTests++;
      const matchIdx = getMatch(testMsg);
      
      if (matchIdx === -1) {
        totalErrors++;
        errorLog.push(`❌ FAIL: "${testMsg}" (Bloque ${bIdx + 1}) -> NOT_FOUND`);
      } else if (matchIdx !== bIdx) {
        totalErrors++;
        const winner = blocks[matchIdx];
        const rawClean = normalize(testMsg);
        errorLog.push(`⚠️ OVERLAP: "${testMsg}" [norm: "${rawClean}"] (Esperado Bloque ${bIdx + 1}) -> Gana Bloque ${matchIdx + 1} (Keywords: ${winner.kws.join(',')})`);
      }
    });
  });
});

console.log("\n--- RESULTADOS ---");
console.log(`Total pruebas ejecutadas: ${totalTests}`);
console.log(`Total errores/conflictos: ${totalErrors}`);
console.log(`Precision: ${((totalTests - totalErrors) / totalTests * 100).toFixed(2)}%`);

if (errorLog.length > 0) {
  console.log("\n--- DETALLE DE ERRORES ---");
  errorLog.forEach(e => console.log(e));
}
