#!/usr/bin/env deno run --allow-read

import { rangeToSeq } from "./utils.ts";

const input = Deno.readTextFileSync("day4/input.txt").split("\n");

const strRange = input.map((line) => line.split(","));
const numRange = strRange.map((pair) => pair.map(rangeToSeq));

const overlap = numRange.filter((pair) =>
  pair[0].filter((n) => pair[1].includes(n)).length > 0 ||
  pair[1].filter((n) => pair[0].includes(n)).length > 0
);

console.log(overlap.length);
