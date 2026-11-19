interface ParsedItem {
  prefix: string;
  number: number;
  suffix: string;
}

function parseItem(value: string): ParsedItem {
  const match = value.match(/^([a-zA-Z]+)(\d+)(.*)$/);

  if (!match) {
    throw new Error(`Invalid input format: ${value}`);
  }

  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
  };
}

export function customSort(input: string[]): string[] {
  return [...input].sort((a, b) => {
    const itemA = parseItem(a);
    const itemB = parseItem(b);

    // 1. Sort by prefix alphabetically
    const prefixCompare = itemA.prefix.localeCompare(itemB.prefix);

    if (prefixCompare !== 0) {
      return prefixCompare;
    }

    // 2. Sort by number ascending
    if (itemA.number !== itemB.number) {
      return itemA.number - itemB.number;
    }

    // 3. Sort by suffix alphabetically
    return itemA.suffix.localeCompare(itemB.suffix);
  });
}
