import { input } from "./input";

const shapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

const outcomeScore1 = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
};

export function part1() {
  return input.reduce((totalScore, [opponent, response]) => {
    return (
      totalScore +
      shapeScore[response] +
      outcomeScore1[`${opponent}${response}`]
    );
  }, 0);
}

const outcomeScore2 = {
  AX: 0 + 3,
  AY: 3 + 1,
  AZ: 6 + 2,
  BX: 0 + 1,
  BY: 3 + 2,
  BZ: 6 + 3,
  CX: 0 + 2,
  CY: 3 + 3,
  CZ: 6 + 1,
};

export function part2() {
  return input.reduce((totalScore, [opponent, response]) => {
    return totalScore + outcomeScore2[`${opponent}${response}`];
  }, 0);
}
