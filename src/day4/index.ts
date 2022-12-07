import { input } from "./input";

export function part1() {
  return input
    .map((x) => {
      const [first, second] = x.split(",");
      const [firstStart, firstEnd] = first
        .split("-")
        .map((y) => Number.parseInt(y));
      const [secondStart, secondEnd] = second
        .split("-")
        .map((y) => Number.parseInt(y));

      const firstRange = firstEnd - firstStart;
      const secondRange = secondEnd - secondStart;

      const combinedRange =
        Math.max(firstEnd, secondEnd) - Math.min(firstStart, secondStart);

      if (combinedRange === firstRange || combinedRange === secondRange) {
        return 1;
      }

      return 0;
    })
    .reduce<number>((sum, val) => (sum += val), 0);
}

export function part2() {
  return input
    .map((x) => {
      const [first, second] = x.split(",");
      const [firstStart, firstEnd] = first
        .split("-")
        .map((y) => Number.parseInt(y));
      const [secondStart, secondEnd] = second
        .split("-")
        .map((y) => Number.parseInt(y));

      const firstRange = firstEnd - firstStart;
      const secondRange = secondEnd - secondStart;

      const combinedRange =
        Math.max(firstEnd, secondEnd) - Math.min(firstStart, secondStart);

      if (combinedRange <= firstRange + secondRange) {
        return 1;
      }

      return 0;
    })
    .reduce<number>((sum, val) => (sum += val), 0);
}
