import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const outputDir = new URL("../docs/", import.meta.url);
const response = await fetch("http://127.0.0.1:3000/");

if (!response.ok) {
  throw new Error(`Failed to render page: ${response.status}`);
}

const html = (await response.text())
  .replaceAll('="/assets/', '="./assets/')
  .replaceAll('="/packaging/', '="./packaging/');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(new URL("../dist/client/assets/", import.meta.url), new URL("./assets/", outputDir), { recursive: true });
await cp(new URL("../public/packaging/", import.meta.url), new URL("./packaging/", outputDir), { recursive: true });
await writeFile(new URL("./index.html", outputDir), html);
await writeFile(new URL("./.nojekyll", outputDir), "");

const index = await readFile(new URL("./index.html", outputDir), "utf8");
if (!index.includes("巴西猫砂品牌")) {
  throw new Error("Static export verification failed");
}

console.log("GitHub Pages export created in docs/");
