#!/usr/bin/env deno run --allow-read

import * as utils from "./utils.ts";

const input = Deno.readTextFileSync("day3/input.txt").split("\n");

// can i do this declaratively?
// --------------------------------------------
const result: string[][] = [];
let i = 0;

while (i < input.length) {
  result.push([input[i], input[i + 1], input[i + 2]]);
  i += 3;
}
// --------------------------------------------

const groupPrioritySum = result
  .map((group) => utils.commonChars(utils.commonChars(group[0], group[1]).join(""), group[2]))
  .flatMap((arr) => arr)
  .reduce((acc, char) => acc + utils.letterToPriority(char), 0);

console.log(groupPrioritySum);
