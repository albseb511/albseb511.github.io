# Albert Sebastian — Portfolio

Dependency-free personal portfolio for [albseb511.github.io](https://albseb511.github.io/).

The root site is a static HTML/CSS/JavaScript build. Project content lives in
`portfolio-data.js`; the older demo directories remain in place so their existing URLs
continue to work.

## Preview locally

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html` — semantic page structure and metadata
- `index.css` — responsive editorial design system
- `portfolio-data.js` — featured projects and build log
- `index.js` — rendering and small interaction enhancements
- `assets/projects/` — optimized, public-safe project imagery
- `assets/neo-renaissance-bg.jpg` — generated fresco backdrop used by the subtle hero parallax

There is intentionally no build command or framework dependency. GitHub Pages can serve
the repository directly.

When project data changes, regenerate the crawlable HTML and schema, then run the SEO check:

```sh
npm run render
npm run check
```

These scripts use Node.js only and add no runtime or package dependencies.

## Preserved legacy demos

- [Restaurant Manager](https://albseb511.github.io/rest_manager/)
- [Sorting visualizer](https://albseb511.github.io/algo/sort/)
- [Sudoku](https://albseb511.github.io/sudoku/)
- [Honey Pot](https://albseb511.github.io/honey_pot/)
- [Darth Vader](https://albseb511.github.io/darth_vader/)
