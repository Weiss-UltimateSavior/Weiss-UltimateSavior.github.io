# Tyranor Next Documentation

This repository contains the VitePress documentation site for Tyranor Next.

- Canonical repository: [Weiss-UltimateSavior/Weiss-UltimateSavior.github.io](https://github.com/Weiss-UltimateSavior/Weiss-UltimateSavior.github.io)
- Upstream project: [Weiss-UltimateSavior/Tyranor-Next](https://github.com/Weiss-UltimateSavior/Tyranor-Next)

Downstream copies and forks should keep their changes in sync with the canonical documentation repository.

## Development

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

The generated static site is written to `.vitepress/dist`.

To publish the generated files to the repository root for compatibility with
legacy GitHub Pages configuration, run:

```bash
npm run docs:publish
```

## Deploy

GitHub Actions builds the VitePress site, syncs its output to the repository
root, and deploys `.vitepress/dist` to GitHub Pages on pushes to `main`.
