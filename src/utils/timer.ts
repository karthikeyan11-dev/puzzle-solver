export function isTimeExceeded(start: number, limitMs: number): boolean {
  return performance.now() - start > limitMs;
}
