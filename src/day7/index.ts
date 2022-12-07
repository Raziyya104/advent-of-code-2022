import { input } from "./input";
// const input = [
//   "$ cd /",
//   "$ ls",
//   "dir a",
//   "14848514 b.txt",
//   "8504156 c.dat",
//   "dir d",
//   "$ cd a",
//   "$ ls",
//   "dir e",
//   "29116 f",
//   "2557 g",
//   "62596 h.lst",
//   "$ cd e",
//   "$ ls",
//   "584 i",
//   "$ cd ..",
//   "$ cd ..",
//   "$ cd d",
//   "$ ls",
//   "4060174 j",
//   "8033020 d.log",
//   "5626152 d.ext",
//   "7214296 k",
// ];

export function part1() {
  let currentDirectory: string[] = [];
  const system: Record<string, number> = { "/": 0 };

  for (const line of input) {
    if (line.startsWith("dir") || line.startsWith("$ ls")) {
      continue;
    }

    if (line === "$ cd /") {
      currentDirectory = [];
      continue;
    }

    if (line.startsWith("$ cd ..")) {
      currentDirectory.pop();
      continue;
    }

    if (line.startsWith("$ cd")) {
      currentDirectory.push(line.split(" ")[2]);
      continue;
    }

    const size = Number.parseInt(line.split(" ")[0]);

    system["/"] += size;

    let path = "";

    for (const directory of currentDirectory) {
      path += `/${directory}`;
      if (system[path]) {
        system[path] += size;
      } else {
        system[path] = size;
      }
    }
  }
  // console.log(system);

  const part1 = Object.values(system).reduce((sum, val) => {
    if (val <= 100000) {
      return sum + val;
    }
    return sum;
  }, 0);

  const part2 = Object.values(system)
    .sort((a, b) => a - b)
    .find((x) => x > 30000000 + system["/"] - 70000000);

  return [part1, part2];
}
