#!/usr/bin/env deno run --allow-read

const input = Deno.readTextFileSync("day1/input.txt");

const calories = input
  .split("\n\n")
  .map((elf) => elf.split("\n").map((calorie) => parseInt(calorie, 10)))
  .map((elf) => elf.reduce((acc, calorie) => acc + calorie, 0));

const topThree = calories
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, calorie) => acc + calorie, 0);

console.log(topThree);
