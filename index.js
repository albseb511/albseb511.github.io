import { buildLog, projects } from "./portfolio-data.js";
import { buildEntryMarkup, projectMarkup } from "./portfolio-render.js";

document.documentElement.classList.add("js");

const projectGrid = document.querySelector("#project-grid");
const buildLogList = document.querySelector("#build-log-list");

// Static HTML is committed for crawlers. This is a resilient fallback if a future edit
// removes the generated markup without running the renderer.
if (!projectGrid.querySelector(".project-card")) {
  projectGrid.innerHTML = projects.map((project) => projectMarkup(project, projects.length)).join("");
}
if (!buildLogList.querySelector(".build-entry")) {
  buildLogList.innerHTML = buildLog.map(buildEntryMarkup).join("");
}

document.querySelector("#year").textContent = String(new Date().getFullYear());

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const hero = document.querySelector(".hero");
const renaissanceArt = document.querySelector(".renaissance-art");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (hero && renaissanceArt && !reduceMotion) {
  const current = { x: 0, y: 0, scroll: 0 };
  const target = { x: 0, y: 0, scroll: 0 };
  let frame = null;

  const animateArt = () => {
    current.x += (target.x - current.x) * 0.075;
    current.y += (target.y - current.y) * 0.075;
    current.scroll += (target.scroll - current.scroll) * 0.075;
    renaissanceArt.style.setProperty("--art-x", `${current.x.toFixed(2)}px`);
    renaissanceArt.style.setProperty("--art-y", `${current.y.toFixed(2)}px`);
    renaissanceArt.style.setProperty("--art-scroll", `${current.scroll.toFixed(2)}px`);

    const movement =
      Math.abs(target.x - current.x) +
      Math.abs(target.y - current.y) +
      Math.abs(target.scroll - current.scroll);
    frame = movement > 0.08 ? requestAnimationFrame(animateArt) : null;
  };

  const scheduleArt = () => {
    if (frame === null) frame = requestAnimationFrame(animateArt);
  };

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = hero.getBoundingClientRect();
    target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -16;
    target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    scheduleArt();
  });

  hero.addEventListener("pointerleave", () => {
    target.x = 0;
    target.y = 0;
    scheduleArt();
  });

  window.addEventListener(
    "scroll",
    () => {
      const top = hero.getBoundingClientRect().top;
      target.scroll = Math.max(-24, Math.min(0, top * 0.035));
      scheduleArt();
    },
    { passive: true }
  );
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
