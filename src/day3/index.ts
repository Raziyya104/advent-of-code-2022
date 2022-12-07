import { input } from "./input";

const letterPriority = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function part1() {
  return input
    .map((x) => {
      const first = x.slice(0, x.length / 2);
      const second = x.slice(x.length / 2);

      let sharedLetter = "";
      for (const letter of first) {
        if (second.includes(letter)) {
          sharedLetter = letter;
          break;
        }
      }

      return letterPriority.indexOf(sharedLetter) + 1;
    })
    .reduce((sum, val) => (sum += val), 0);
}

export function part2() {
  return input
    .reduce<string[][]>((groups, val, i) => {
      if (i % 3 === 0) {
        groups[i / 3] = [];
      }

      groups[Math.floor(i / 3)].push(val);
      return groups;
    }, [])
    .map(([first, second, third]) => {
      let sharedLetter = "";
      for (const letter of first) {
        if (second.includes(letter) && third.includes(letter)) {
          sharedLetter = letter;
          break;
        }
      }

      return letterPriority.indexOf(sharedLetter) + 1;
    })
    .reduce((sum, val) => (sum += val), 0);
}
