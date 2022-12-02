type Action = "Rock" | "Paper" | "Scissors";
type Outcome = "tied" | "won" | "lost";

// can probably be done better
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

const actionToWord = (action: string): Action =>
  action === "A" ? "Rock" : (action === "B" ? "Paper" : "Scissors");

export type { Action };

export { actionToWord, evalActionScore, evalOutcome, evalOutcomeScore };
