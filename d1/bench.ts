import d1p1 from "./p1/solve.ts";
import d1p2 from "./p2/solve.ts";

const d1Input = Deno.readTextFileSync(`${new URL(".", import.meta.url).pathname}/input.txt`);

Deno.bench("d1p1", () => {
  d1p1.solve(d1Input);
});

Deno.bench("d1p2", () => {
  d1p2.solve(d1Input);
});
