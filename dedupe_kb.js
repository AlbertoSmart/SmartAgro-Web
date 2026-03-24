import fs from 'fs';
const CHAT_PATH = 'src/pages/api/chat.ts';
const content = fs.readFileSync(CHAT_PATH, 'utf8');

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

function extractBlocks() {
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
    const rawKws = kwMatch ? kwMatch[1].split(',') : [];
    const kws = rawKws.map(s => s.trim().replace(/['"\[\]]/g, '')).filter(k => k && k.length > 0);
    const isTechnical = str.includes('isTechnical: true');
    return { str, kws, isTechnical, index: idx };
  });
}

const blocks = extractBlocks();
const kwWinners = {}; 

blocks.forEach((block) => {
  block.kws.forEach(kw => {
    const norm = normalize(kw);
    if (!norm) return;
    const score = Math.pow(norm.length, 2);
    const totalPriority = score + (block.isTechnical ? 1000 : 0);
    if (!kwWinners[norm] || totalPriority > kwWinners[norm].priority || (totalPriority === kwWinners[norm].priority && block.index > kwWinners[norm].index)) {
      kwWinners[norm] = { index: block.index, priority: totalPriority };
    }
  });
});

const cleanedBlocks = blocks.map((block, bIdx) => {
  const finalKws = block.kws.filter(kw => {
    const norm = normalize(kw);
    if (!norm) return false;
    return kwWinners[norm].index === bIdx;
  });
  const kwRegex = /(keywords:\s*\[)([\s\S]*?)(\])/;
  return block.str.replace(kwRegex, (match, p1, p2, p3) => {
    return `${p1}${finalKws.map(k => `'${k}'`).join(', ')}${p3}`;
  });
});

const newKnowledge = `const LOCAL_KNOWLEDGE = [\n  ${cleanedBlocks.join(',\n  ')}\n];`;
const newFile = content.replace(/const LOCAL_KNOWLEDGE = \[[\s\S]*?\];/, newKnowledge);
fs.writeFileSync(CHAT_PATH, newFile);
console.log(`Deduplicación completada con éxito.`);
