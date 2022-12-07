import { input } from "./input";

export function part1() {
  for (let i = 4; i < input.length; i++) {
    const set = new Set(input.slice(i - 4, i));
    if (set.size === 4) {
      return i;
    }
  }
}

export function part2() {
  for (let i = 14; i < input.length; i++) {
    const set = new Set(input.slice(i - 14, i));
    if (set.size === 14) {
      return i;
    }
  }
}
