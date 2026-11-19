
/**
 * Generate a Tribonacci sequence.
 *
 * Missing initial values are padded with zeros.
 * n represents the total number of elements,
 * including the initial values.
 */
export function tribonacci(
  signature: number[],
  n: number
): number[] {
  if (
    !Number.isInteger(n) ||
    n < 0 ||
    !Number.isSafeInteger(n)
  ) {
    throw new Error('n must be a non-negative safe integer');
  }

  if (
    signature.length > 3 ||
    signature.some((value) => !Number.isSafeInteger(value))
  ) {
    throw new Error('Signature must contain up to 3 safe integers');
  }

  // Return empty array when n is zero
  if (n === 0) {
    return [];
  }

  // Use initial values and pad missing values with zero
  const result = [...signature, 0, 0, 0].slice(0, 3);

  // Generate Tribonacci sequence
  while (result.length < n) {
    const length = result.length;

    const nextValue =
      result[length - 1] +
      result[length - 2] +
      result[length - 3];

    if (!Number.isSafeInteger(nextValue)) {
      throw new Error('Result exceeds the safe integer range');
    }

    result.push(nextValue);
  }

  return result.slice(0, n);
}
