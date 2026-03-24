
import fs from 'fs';

// Extract LOCAL_KNOWLEDGE from the file manually
const content = fs.readFileSync('/Users/alejandrosierra/Desktop/Astro/agreeable-altitude/src/pages/api/chat.ts', 'utf8');

// Simple parser for LOCAL_KNOWLEDGE
const blocks = [];
let inArray = false;
let currentBlock = null;
let blockCounter = 0;

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.includes('const LOCAL_KNOWLEDGE = [')) {
    inArray = true;
    continue;
  }
  if (inArray && line === '];') {
    inArray = false;
    break;
  }
  if (inArray) {
    if (line.startsWith('{')) {
      currentBlock = { keywords: [], index: blockCounter++, isTechnical: false };
    }
    if (line.includes('isTechnical: true')) {
      currentBlock.isTechnical = true;
    }
    if (line.includes('keywords: [')) {
      const match = line.match(/keywords:\s*\[(.*?)\]/);
      if (match && match[1]) {
        const kws = match[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(k => k);
        currentBlock.keywords = kws;
      } else {
        // Handle multi-line keywords
        let multiKws = "";
        if (line.includes('keywords: [')) {
           // Started on this line
           multiKws = line.split('[')[1] || "";
        }
        let j = i + 1;
        while (j < lines.length && !lines[j].includes(']')) {
          multiKws += lines[j].trim();
          j++;
        }
        if (j < lines.length && lines[j].includes(']')) {
           multiKws += lines[j].split(']')[0];
        }
        const kws = multiKws.split(',').map(s => s.trim().replace(/['"]/g, '')).filter(k => k);
        currentBlock.keywords = kws;
        i = j;
      }
    }
    if (line.startsWith('},')) {
      blocks.push(currentBlock);
      currentBlock = null;
    }
  }
}

function normalize(text) {
  return text.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.,?!¿¡]/g, '')
    .replace(/\b(como|donde|cuando|pero|porque|y|o|el|la|los|las|un|una|que|k|de|mis|mi|a|en|por|con|para|del|al|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre|pues|mira|oye|digamos|sabes|quiero|saber|dime|ver|hay|son|claro|si|vale)\b/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

function getMatch(message) {
  const rawClean = normalize(message);
  const cleanMsg = ' ' + rawClean + ' ';
  const fuzzyMsg = ' ' + rawClean.split(/\s+/).map((w) => w.length > 5 ? w.slice(0, -1) : w).join(' ') + ' ';

  let foundIndex = -1;
  let maxMatches = 0;

  for (let i = blocks.length - 1; i >= 0; i--) {
    let score = 0;
    const item = blocks[i];
    item.keywords.forEach(kw => {
      const normalizedKw = normalize(kw);
      if (!normalizedKw) return;
      if (cleanMsg.includes(' ' + normalizedKw + ' ') || fuzzyMsg.includes(' ' + normalizedKw + ' ')) {
        const kwScore = Math.pow(normalizedKw.length, 2);
        if (kwScore > score) score = kwScore;
      }
    });

    // New logic from chat.ts
    if (rawClean.length < 3 && !item.keywords.some(kw => normalize(kw) === rawClean)) {
      continue;
    }

    const technicalBoost = item.isTechnical ? 1 : 0;
    const finalScore = score > 0 ? score + technicalBoost : 0;

    if (finalScore > maxMatches && finalScore > 0) {
      maxMatches = finalScore;
      foundIndex = i;
    }
  }
  return foundIndex;
}

const totalKeywordsCount = blocks.reduce((acc, b) => acc + (b ? b.keywords.length : 0), 0);
console.log(`Palabras clave probadas: ${totalKeywordsCount}`);

const errorsDetected = [];
blocks.forEach((block, bIdx) => {
  if (!block) return;
  block.keywords.forEach(kw => {
    const matchIdx = getMatch(kw);
    if (matchIdx === -1) {
      errorsDetected.push(`"${kw}" (Bloque ${bIdx + 1}) -> NOT_FOUND (Bloque 0)`);
    } else if (matchIdx !== bIdx) {
      errorsDetected.push(`"${kw}" (Bloque ${bIdx + 1}) -> LOWER_PRIORITY_WIN (Bloque ${matchIdx + 1})`);
    }
  });
});

console.log(`Errores reales detectados: ${errorsDetected.length}`);
errorsDetected.slice(0, 54).forEach(e => console.log(`- ${e}`));
