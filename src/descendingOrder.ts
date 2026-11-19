
/**
 * Sort digits of a positive integer in descending order.
 */
export function descendingOrder(num: number): number {
  if (!Number.isSafeInteger(num) || num <= 0) {
    throw new Error('Input must be a positive safe integer');
  }

  return Number(
    num
      .toString()
      .split('')
      .sort((a, b) => Number(b) - Number(a))
      .join('')
  );
}
