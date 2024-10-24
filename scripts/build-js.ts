import { transpile } from "jsr:@deno/emit";

const addFunctionToScript = async (
  source: string,
  name: string,
  destination: string,
) => {
  const transpiledSource = await transpile(source);
  const code = Array.from(transpiledSource.values()).join("\n");

  Deno.writeTextFileSync(destination, code, { append: true });
  Deno.writeTextFileSync(
    destination,
    `\nglobalThis.window.${name} = ${name};\n`,
    { append: true },
  );
};

const BUILD_SCRIPT = "build/static/script.js";

const functions = [
  {
    source: "src/inititiative/initiative-table.ts",
    name: "sortInitiativeTable",
  },
  { source: "src/dice/dice.ts", name: "roll" },
];

functions.forEach(async ({ source, name }) => {
  await addFunctionToScript(source, name, BUILD_SCRIPT);
});
