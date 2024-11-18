import { transpile } from "jsr:@deno/emit";

const addIndexToScript = async (
  source: string,
  destination: string,
) => {
  const transpiledSource = await transpile(source);
  const codeArray = Array.from(transpiledSource.values());
  const noImportExport = [];

  for (const element of codeArray) {
    if (element.startsWith("import {") || element.startsWith("export {")) {
      const lines = element.split("\n").map((line) => {
        if (!line.startsWith("import {") && !line.startsWith("export {")) {
          return line;
        }
      }).join("\n");
      noImportExport.push(lines);
    } else {
      noImportExport.push(element);
    }
  }

  const code = [...new Set(noImportExport)].join("\n");

  Deno.writeTextFileSync(destination, code, { append: true });
};

const BUILD_SCRIPT = "build/static/script.js";

const functions = [
  "roll",
  "sortInitiativeTable",
  "evaluateEncounter",
  "imageUpload",
];

const source = "src/index.ts";

await addIndexToScript(source, BUILD_SCRIPT);

functions.forEach((name) => {
  Deno.writeTextFileSync(
    BUILD_SCRIPT,
    `\nglobalThis.window.${name} = ${name};`,
    { append: true },
  );
});
