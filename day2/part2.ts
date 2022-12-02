#!/usr/bin/env deno run --allow-read

import * as Game from "./game.ts";

const input = Deno.readTextFileSync("day2/input.txt");
let points = 0;

input
  .split("\n")
  .map((round) => round.split(" "))
  .map((round) =>
    round = [
      Game.letterToAction(round[0]),
      Game.letterToOutcome(round[1]),
    ] as [
      Game.Action,
      Game.Outcome,
    ]
  )
  .forEach((round) => {
    const desiredOutcome = round[1] === "won" ? Game.getWinAction(round[0]) : (
      round[1] === "lost" ? Game.getLossAction(round[0]) : round[0]
    );
    const outcomeScore = Game.evalOutcomeScore(round[1]);
    const actionScore = Game.evalActionScore(desiredOutcome);
    points += outcomeScore + actionScore;
  });

console.log(`Total points: ${points}`);
