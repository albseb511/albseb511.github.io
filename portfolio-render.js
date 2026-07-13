export const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function visualMarkup(project) {
  const stamp = `<span class="project-stamp">${escapeHtml(project.status)}</span>`;

  if (project.visual === "image") {
    return `
      <div class="project-visual visual-${escapeHtml(project.visualClass)}">
        ${stamp}
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy" decoding="async" />
      </div>`;
  }

  if (project.visual === "modos") {
    return `
      <div class="project-visual visual-code visual-modos" role="img" aria-label="Mod OS command line driving Android through a structured control daemon">
        ${stamp}
        <div class="terminal-window">
          <div class="terminal-bar"><i></i><i></i><i></i><span>modctl / device:r8q</span></div>
          <div class="terminal-body">
            <p><span class="prompt">$</span> modctl app open settings</p>
            <p class="dim">→ observing accessibility tree</p>
            <p><span class="prompt">$</span> agent run "open Internet"</p>
            <p class="dim">→ reason: tap Network &amp; internet</p>
            <p class="dim">→ action: ui.tap node_14</p>
            <p><span class="ok">✓ goal reached on device</span></p>
          </div>
        </div>
      </div>`;
  }

  if (project.visual === "setu") {
    return `
      <div class="project-visual visual-code visual-setu" role="img" aria-label="Setu translating a Kannada legal document into an English working view">
        ${stamp}
        <div class="setu-canvas">
          <div class="setu-panel"><span>ಮೂಲ ದಾಖಲೆ · Kannada</span><strong>ಕಾನೂನು<br />ದಾಖಲೆ</strong></div>
          <div class="setu-bridge" aria-hidden="true">→</div>
          <div class="setu-panel"><span>Working view · English</span><strong>Legal<br />document</strong></div>
        </div>
      </div>`;
  }

  if (project.visual === "cake") {
    return `
      <div class="project-visual visual-code visual-cake" role="img" aria-label="Cake Studio 3D editor with a three-tier decorated cake and design controls">
        ${stamp}
        <div class="cake-studio-canvas">
          <div class="cake-toolbar" aria-hidden="true">
            <span>Layers</span><i></i><i></i><i></i><i></i>
          </div>
          <div class="cake-model" aria-hidden="true">
            <div class="cake-topper">✦</div>
            <div class="cake-tier cake-tier-top"><b></b><b></b><b></b></div>
            <div class="cake-tier cake-tier-middle"><b></b><b></b><b></b><b></b></div>
            <div class="cake-tier cake-tier-base"><b></b><b></b><b></b><b></b><b></b></div>
            <div class="cake-board"></div>
          </div>
          <div class="cake-controls" aria-hidden="true">
            <span>DESIGN</span><strong>Classic three tier</strong>
            <label>Coating <i></i></label><label>Piping <i></i></label><label>Decorations <i></i></label>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="project-visual visual-code visual-goodwatch" role="img" aria-label="GoodWatch television interface asking what the viewer should watch">
      ${stamp}
      <div class="goodwatch-tv">
        <div class="goodwatch-screen">
          <p>Ask once · Taste first</p>
          <strong>What should we watch?</strong>
        </div>
        <div class="goodwatch-dial" aria-hidden="true">◉</div>
      </div>
    </div>`;
}

export function projectMarkup(project, total = 9) {
  const links = project.links.length
    ? `<div class="project-links">${project.links
        .map(
          (link) =>
            `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`
        )
        .join("")}</div>`
    : "";

  return `
    <article class="project-card project-${escapeHtml(project.layout)} reveal">
      ${visualMarkup(project)}
      <div class="project-meta">
        <span>${escapeHtml(project.type)}</span>
        <span>${escapeHtml(project.year)} · ${escapeHtml(project.status)}</span>
      </div>
      <div class="project-title-row">
        <h3>${escapeHtml(project.title)}</h3>
        <span>${escapeHtml(project.number)} / ${String(total).padStart(2, "0")}</span>
      </div>
      <p class="project-description">${escapeHtml(project.description)}</p>
      <ul class="project-tags" aria-label="Technologies used">
        ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
      </ul>
      ${links}
    </article>`;
}

export function buildEntryMarkup(entry, index) {
  const title = entry.url
    ? `<h3><a href="${escapeHtml(entry.url)}" target="_blank" rel="noreferrer">${escapeHtml(entry.title)} ↗</a></h3>`
    : `<h3>${escapeHtml(entry.title)}</h3>`;

  return `
    <article class="build-entry reveal">
      <span>${String(index + 1).padStart(2, "0")} · ${escapeHtml(entry.year)}</span>
      ${title}
      <p>${escapeHtml(entry.description)}</p>
      <span class="build-status">${escapeHtml(entry.status)}</span>
    </article>`;
}

export function creativeWorkSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@graph": projects.map((project) => ({
      "@type": "CreativeWork",
      "@id": `https://albseb511.github.io/#work-${project.number}`,
      name: project.title,
      description: project.description,
      dateCreated: project.year,
      creator: { "@id": "https://albseb511.github.io/#person" },
      keywords: project.tags.join(", "),
      ...(project.links[0] ? { url: project.links[0].url } : {})
    }))
  };
}
