/**
 * - Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 */
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (item) => htmlEntities[item]);
}
convertHTML("Dolce & Gabbana");

// or

function convertHTML(str) {
  const char = ["&", "<", ">", "'", '"'];
  const entities = ["&amp;", "&lt;", "&gt;", "&apos;", "&quot;"];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (char.indexOf(str[i]) >= 0) {
      str[i] = entities[char.indexOf(str[i])];
    }
  }
  return (str = str.join(""));
}
convertHTML("Dolce & Gabbana");
