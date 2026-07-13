import { readFile, writeFile } from "node:fs/promises";
import { buildLog, projects } from "../portfolio-data.js";
import { buildEntryMarkup, creativeWorkSchema, projectMarkup } from "../portfolio-render.js";

const indexPath = new URL("../index.html", import.meta.url);
let html = await readFile(indexPath, "utf8");

function replaceGeneratedBlock(source, marker, content) {
  const start = `<!-- ${marker}:START -->`;
  const end = `<!-- ${marker}:END -->`;
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Missing or invalid ${marker} markers in index.html`);
  }
  return `${source.slice(0, startIndex + start.length)}\n${content.trim()}\n${source.slice(endIndex)}`;
}

html = replaceGeneratedBlock(
  html,
  "PROJECTS",
  projects.map((project) => projectMarkup(project, projects.length)).join("\n")
);
html = replaceGeneratedBlock(html, "BUILD_LOG", buildLog.map(buildEntryMarkup).join("\n"));
html = replaceGeneratedBlock(
  html,
  "CREATIVE_WORK_SCHEMA",
  `<script type="application/ld+json">\n${JSON.stringify(creativeWorkSchema(projects), null, 2)}\n    </script>`
);
html = html.replace(/^[\t ]+$/gm, "");

await writeFile(indexPath, html);
console.log(`Rendered ${projects.length} projects and ${buildLog.length} build-log entries into index.html`);
