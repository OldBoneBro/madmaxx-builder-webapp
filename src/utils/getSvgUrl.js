export function getSvgUrl(path) {
  return new URL(path, import.meta.url).href;
}
