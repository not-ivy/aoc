const digits = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export default {
  solve(input: string) {
    return input
      .split("\n")
      .map((line) => line.match(/(one|two|three|four|five|six|seven|eight|nine)|(\d)/g))
      .map((line) => line!.map((digit) => digits[digit as keyof typeof digits] ?? digit))
      .map((line) => line = [line![0], line!.at(-1) ?? line![0]])
      .map((line) => line.reduce((a, b) => a + b, ""))
      .map((num) => parseInt(num, 10))
      .reduce((a, b) => a + b, 0);
  },
};
