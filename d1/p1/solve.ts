export default {
  solve(file: string) {
    return file
      .split("\n")
      .map((line) => line.match(/(\d)/g))
      .map((line) => line = [line![0], line!.at(-1) ?? line![0]])
      .map((line) => line.reduce((a, b) => a + b, ""))
      .map((num) => parseInt(num, 10))
      .reduce((a, b) => a + b, 0);
  },
};
