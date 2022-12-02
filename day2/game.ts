// can probably be done better
type Action = "Rock" | "Paper" | "Scissors";
type Outcome = "tied" | "won" | "lost";

const evalOutcome = (player: Action, opponent: Action): Outcome =>
  player === opponent ? "tied" : player === "Rock" && opponent === "Scissors" ||
      player === "Paper" && opponent === "Rock" ||
      player === "Scissors" && opponent === "Paper"
    ? "won"
    : "lost";

const evalOutcomeScore = (outcome: Outcome): number =>
  outcome === "won" ? 6 : (outcome === "tied" ? 3 : 0);

const evalActionScore = (action: Action): number =>
  action === "Rock" ? 1 : (action === "Paper" ? 2 : 3);

const letterToAction = (letter: string): Action =>
  letter === "A" ? "Rock" : (letter === "B" ? "Paper" : "Scissors");

const letterToOutcome = (letter: string): Outcome =>
  letter === "X" ? "lost" : (letter === "Y" ? "tied" : "won");

const getWinAction = (action: Action): Action =>
  action === "Rock" ? "Paper" : (action === "Paper" ? "Scissors" : "Rock");

const getLossAction = (action: Action): Action =>
  action === "Rock" ? "Scissors" : (action === "Paper" ? "Rock" : "Paper");

export type { Action, Outcome };

export {
  evalActionScore,
  evalOutcome,
  evalOutcomeScore,
  getLossAction,
  getWinAction,
  letterToAction,
  letterToOutcome,
};
