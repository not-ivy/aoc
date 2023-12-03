import minimist from "https://esm.sh/minimist@1.2.8";
import "https://deno.land/std@0.208.0/dotenv/load.ts";

const args = minimist(Deno.args);

const [d, p] = args._[0].match(/(d\d)|(p\d)/g)?.map((a) => a[1]) ?? [];
const module = (await import(`./d${d}/p${p}/solve.ts`)).default;
const input = args.r
  ? (await (await fetch(`https://adventofcode.com/2023/day/${d}/input`, {
    headers: {
      "Cookie": `session=${Deno.env.get("session")}`,
    },
  })).text()).trim()
  : (args.p
    ? Deno.readTextFileSync(`./d${d}/p${p}/prompt.txt`)
    : Deno.readTextFileSync(`./d${d}/input.txt`));

console.log(module.solve(input));
