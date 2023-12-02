type Colors = "red" | "green" | "blue";

export default {
  solve(file: string) {
    return file
      .split("\n")
      .map((line) => line.match(/\d (red|green|blue)/g))
      .map((line) =>
        line!.reduce((acc, curr) => {
          const [num, color] = curr.split(" ") as [string, Colors];
          acc[color] += parseInt(num, 10);
          return acc;
        }, { red: 0, green: 0, blue: 0 } as Record<Colors, number>)
      )
      .reduce(
        (acc, curr, i) =>
          (curr.red <= 12 && curr.green <= 13 && curr.blue <= 14) ? acc += i + 1 : acc,
        0,
      );
  },
};
