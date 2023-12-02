const args = Deno.args;
const [d, p] = args[0].match(/(d\d)|(p\d)/g)?.map((a) => a[1]) ?? [];
const module = (await import(`./d${d}/p${p}/solve.ts`)).default;
const file = Deno.readTextFileSync(
  args[1] === "-p" ? `./d${d}/p${p}/prompt.txt` : `./d${d}/input.txt`,
);
console.log(module.solve(file));
