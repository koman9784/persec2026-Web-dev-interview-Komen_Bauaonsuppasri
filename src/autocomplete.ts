
export function autocomplete(
  search: string,
  items: string[],
  maxResult: number
): string[] {
  // Return empty array when search is empty or maxResult is invalid
  if (!search || maxResult <= 0) {
    return [];
  }

  const keyword = search.toLowerCase();

  return items
    .map((item, index) => ({
      item,
      index,
      value: item.toLowerCase(),
    }))
    // 1. Filter items that contain the search keyword
    .filter(({ value }) => value.includes(keyword))
    // 2. Sort by matching priority
    .sort((a, b) => {
      const getPriority = (value: string): number => {
        if (value.startsWith(keyword)) return 1;
        if (value.endsWith(keyword)) return 3;
        return 2;
      };

      const priorityA = getPriority(a.value);
      const priorityB = getPriority(b.value);

      // Lower priority number comes first
      return priorityA - priorityB || a.index - b.index;
    })
    // 3. Limit the maximum results
    .slice(0, Math.floor(maxResult))
    // 4. Return original strings
    .map(({ item }) => item);
}
