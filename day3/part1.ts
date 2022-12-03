#!/usr/bin/env deno run --allow-read

import * as utils from "./utils.ts";

const input = Deno.readTextFileSync("day3/input.txt");

const prioritySum = input
  .split("\n")
  .map((line) => [line.slice(0, line.length / 2), line.slice(line.length / 2)])
  .map((pair) =>
    utils
      .commonChars(pair[0], pair[1])
      .map((char) => utils.letterToPriority(char))
  )
  .flatMap((arr) => arr)
  .reduce((acc, priority) => acc + priority, 0);

console.log(prioritySum);
