export function selector(json, key) {
  return json.find((per) => per.name === key);
}
