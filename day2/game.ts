// can probably be done better
type Action = "Rock" | "Paper" | "Scissors";
type Outcome = "tied" | "won" | "lost";

const evalOutcome = (player: Action, opponent: Action): Outcome => {
  if (player === opponent) {
    return "tied";
  }
  if (player === "Rock" && opponent === "Scissors") {
    return "won";
  }
  if (player === "Paper" && opponent === "Rock") {
    return "won";
  }
  if (player === "Scissors" && opponent === "Paper") {
    return "won";
  }
  return "lost";
};

const evalOutcomeScore = (outcome: Outcome): number =>
  outcome === "won" ? 6 : (outcome === "tied" ? 3 : 0);

const evalActionScore = (action: Action): number => {
  switch (action) {
    case "Rock":
      return 1;
    case "Paper":
      return 2;
    case "Scissors":
      return 3;
  }
};

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
