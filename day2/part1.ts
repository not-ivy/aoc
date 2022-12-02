#!/usr/bin/env deno run --allow-read

import * as Game from "./game.ts";

let input = Deno.readTextFileSync("day2/input.txt");
input = input.replaceAll("X", "A").replaceAll("Y", "B").replaceAll("Z", "C");
let points = 0;

input
  .split("\n")
  .map((round) => round.split(" "))
  .map((round) =>
    round = [Game.actionToWord(round[0]), Game.actionToWord(round[1])]
  )
  .forEach((round) => {
    const outcome = Game.evalOutcome(round[1], round[0]); // first is opponent, second is player
    const outcomeScore = Game.evalOutcomeScore(outcome);
    const actionScore = Game.evalActionScore(round[1]);
    points += outcomeScore + actionScore;
  });

console.log(`Total points: ${points}`);
