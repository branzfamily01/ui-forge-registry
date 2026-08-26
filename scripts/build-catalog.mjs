import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const metadata = JSON.parse(readFileSync(resolve(root, "metadata/components.json"), "utf8"));
const output = metadata.map((item) => ({
  ...item,
  source: readFileSync(resolve(root, `registry/components/${item.name}.tsx`), "utf8"),
}));
writeFileSync(resolve(root, "assets/components-data.js"), `window.UI_FORGE_COMPONENTS = ${JSON.stringify(output)};\n`);
console.log(`Catalog built: ${output.length} components`);
