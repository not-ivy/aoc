interface Bag {
  num: number;
  color: "red" | "green" | "blue";
  end: ";" | ",";
}

export default {
  solve(input: string) {
    const regex = /(?<num>\d+) (?<color>(?:red|green|blue))(?<end>(?:.|$))/g;
    return input
      .split("\n")
      .map((line) =>
        [...line.matchAll(regex)]
          .map((match) => match.groups)
          .map((bag) =>
            ({
              ...bag,
              num: parseInt(bag!.num, 10),
              end: bag!.end.length ? bag!.end : ";",
            }) as Bag
          )
      )
      .map((line) => {
        const ends = line.reduce((acc, curr, i) => {
          if (curr.end === ";") acc.push(i);
          return acc;
        }, [] as number[]);
        return ends.reduce((acc, curr, i) => {
          acc.push(line.splice(0, curr + 1 - (isNaN(ends[i - 1]) ? 0 : ends[i - 1] + 1)));
          return acc;
        }, [] as Bag[][]);
      })
      .map((line) =>
        line.map((set) =>
          set.reduce((acc, curr) => {
            acc[curr.color] += curr.num;
            return acc;
          }, { red: 0, green: 0, blue: 0 } as Record<"red" | "green" | "blue", number>)
        )
      )
      .reduce((acc, curr, i) => {
        if ((curr.findIndex((bag) => bag.red > 12 || bag.green > 13 || bag.blue > 14)) === -1) {
          acc += i + 1;
        }
        return acc;
      }, 0);
  },
};
