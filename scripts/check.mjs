import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const registry = JSON.parse(readFileSync(resolve(root, "registry.json"), "utf8"));
const metadata = JSON.parse(readFileSync(resolve(root, "metadata/components.json"), "utf8"));
const errors = [];
const registryNames = new Set(registry.items.map((item) => item.name));
const metadataNames = new Set(metadata.map((item) => item.name));
for (const item of registry.items) {
  for (const file of item.files || []) if (!existsSync(resolve(root, file.path))) errors.push(`Missing source: ${file.path}`);
}
for (const name of registryNames) if (!metadataNames.has(name)) errors.push(`Missing metadata: ${name}`);
for (const name of metadataNames) if (!registryNames.has(name)) errors.push(`Missing registry item: ${name}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Check OK: ${registry.items.length} registry items / ${metadata.length} metadata entries`);
