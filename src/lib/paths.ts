/**
 * Returns the clean form of a page path: "/about.html", "/about/" and "/about"
 * all become "/about", and the home page is "/".
 */
export function cleanPath(path: string): string {
  const trimmed = path
    .replace(/\.html$/, '')
    .replace(/\/index$/, '')
    .replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}
