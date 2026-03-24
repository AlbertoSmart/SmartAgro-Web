
const normalize = (text) => {
  return text.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.,?!¿¡]/g, '')
    .replace(/\b(como|donde|cuando|pero|porque|y|o|el|la|los|las|un|una|que|k|de|mis|mi|a|en|por|con|para|del|al|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre|pues|mira|oye|digamos|sabes|quiero|saber|dime|ver|hay|son|claro|si|vale)\b/g, '')
    .trim()
    .replace(/\s+/g, ' ');
};

const input = "8 en 1";
const normalized = normalize(input);
console.log(`Input: "${input}"`);
console.log(`Normalized: "${normalized}"`);
console.log(`Length: ${normalized.length}`);
console.log(`Length < 3: ${normalized.length < 3}`);
