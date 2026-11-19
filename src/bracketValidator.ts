export function isValidBrackets(input: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of input) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      const last = stack.pop();

      if (last !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}