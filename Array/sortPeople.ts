const names = ["6", "5", "7", "4", "2", "1", "3", "8"];
const heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224];

const sortPeople = (names: string[], heights: number[]): string[] =>
  names
    .map((name, order) => ({ name, height: heights[order] }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);

const sortedPeople = sortPeople(names, heights);

console.log(sortedPeople);
