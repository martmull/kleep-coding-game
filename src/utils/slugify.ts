export function slugify(str) {
  return str.replace(/\p{Diacritic}/gu, "").toLowerCase().replaceAll(' ', '-')
}
