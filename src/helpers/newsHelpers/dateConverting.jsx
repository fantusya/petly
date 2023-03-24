export function toISODate(milliseconds) {
  let date = new Date(milliseconds);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  return [d, m, y].join('/');
}
