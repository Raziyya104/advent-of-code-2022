import { input } from "./input";

function getTotals() {
  let elfIndex = -1;
  return input.reduce<number[]>((totals, cal, i, cals) => {
    if (cals[i - 1] === undefined) {
      elfIndex++;
      totals[elfIndex] = 0;
    }

    if (cal !== undefined) {
      totals[elfIndex] += cal;
    }

    return totals;
  }, []);
}

export function part1() {
  return Math.max(...getTotals());
}

export function part2() {
  const sortedTotals = getTotals().sort((a, b) => b - a);
  return sortedTotals[0] + sortedTotals[1] + sortedTotals[2];
}
