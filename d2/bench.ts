import d1p1 from "./p1/solve.ts";

const d1Input = Deno.readTextFileSync(`${new URL(".", import.meta.url).pathname}/input.txt`);

Deno.bench("d1p1", () => {
  d1p1.solve(d1Input);
});
