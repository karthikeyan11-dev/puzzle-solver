export function getColumnOrder(n: number): number[] {
  const center = Math.floor(n / 2);
  const order: number[] = [];

  order.push(center);
  for (let i = 1; i <= center; i++) {
    if (center - i >= 0) order.push(center - i);
    if (center + i < n) order.push(center + i);
  }

  return order;
}
