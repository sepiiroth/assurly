export function calcTarif(ca: number): number {
  const tarifBase = 20;
  const coef = ca > 100000 ? 1.5 : 1.1;
  return tarifBase * coef;
}
