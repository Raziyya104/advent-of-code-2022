import { inputInstructions, inputStart } from "./input";

export function part1() {
  const stacks = [...inputStart];
  inputInstructions.map(([amount, startStack, endStack]) => {
    for (let i = 0; i < amount; i++) {
      const item = stacks[startStack - 1].pop();
      stacks[endStack - 1].push(item!);
    }
  });

  return stacks.map((x) => x.pop()).join("");
}

export function part2() {
  const stacks = [...inputStart];
  inputInstructions.map(([amount, startStack, endStack]) => {
    const items = stacks[startStack - 1].splice(-amount, amount);
    stacks[endStack - 1].push(...items);
  });

  return stacks.map((x) => x.pop()).join("");
}
