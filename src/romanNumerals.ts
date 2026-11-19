
const ROMAN_VALUES: [string, number][] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

/**
 * Convert an integer to Roman Numerals.
 * Supported range: 1 - 3999
 */
export function intToRoman(num: number): string {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new Error('Input must be an integer between 1 and 3999');
  }

  let result = '';

  for (const [symbol, value] of ROMAN_VALUES) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

/**
 * Convert Roman Numerals to an integer.
 * Supports standard uppercase and lowercase Roman Numerals.
 */
export function romanToInt(roman: string): number {
  if (!roman || !/^[IVXLCDM]+$/i.test(roman)) {
    throw new Error('Invalid Roman Numerals');
  }

  const input = roman.toUpperCase();

  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const current = values[input[i]];
    const next = values[input[i + 1]] || 0;

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  // Validate canonical Roman Numeral format
  if (intToRoman(result) !== input) {
    throw new Error('Invalid Roman Numerals format');
  }

  return result;
}
