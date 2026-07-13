import { access, readFile } from "node:fs/promises";
import { buildLog, projects } from "../portfolio-data.js";

const root = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
const failures = [];

const required = [
  "<title>Albert Sebastian — Founder-Builder & AI Product Engineer</title>",
  'rel="canonical" href="https://albseb511.github.io/"',
  'name="robots" content="index, follow',
  'property="og:image" content="https://albseb511.github.io/assets/albert-sebastian-og.jpg"',
  '"image": "https://albseb511.github.io/assets/albert-profile.jpg"',
  '"@type": "ProfilePage"',
  '"@type": "CreativeWork"',
];

for (const value of required) {
  if (!html.includes(value)) failures.push(`Missing required SEO content: ${value}`);
}

const projectCount = (html.match(/class="project-card /g) || []).length;
const buildLogCount = (html.match(/class="build-entry /g) || []).length;
if (projectCount !== projects.length) failures.push(`Expected ${projects.length} static projects, found ${projectCount}`);
if (buildLogCount !== buildLog.length) failures.push(`Expected ${buildLog.length} static build entries, found ${buildLogCount}`);

for (const path of ["robots.txt", "sitemap.xml", "assets/albert-sebastian-og.jpg", "assets/albert-profile.jpg"]) {
  try {
    await access(new URL(path, root));
  } catch {
    failures.push(`Missing SEO file: ${path}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO check passed: ${projectCount} static projects, ${buildLogCount} build entries, metadata and assets present`);
