import {
  cp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile
} from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, '.vitepress', 'dist')
const manifestPath = path.join(rootDir, '.vitepress', 'publish-manifest.json')

if (!existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('VitePress output is missing. Run npm run docs:build first.')
}

let previousFiles = []

try {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
  previousFiles = Array.isArray(manifest.files) ? manifest.files : []
} catch (error) {
  if (error.code !== 'ENOENT') {
    throw error
  }
}

for (const relativePath of previousFiles) {
  const targetPath = path.resolve(rootDir, relativePath)

  if (!targetPath.startsWith(`${rootDir}${path.sep}`)) {
    throw new Error(`Refusing to remove path outside the repository: ${relativePath}`)
  }

  await rm(targetPath, { force: true, recursive: true })
}

const files = []

async function copyDirectory(directory, relativeDirectory = '') {
  const entries = await readdir(directory, { withFileTypes: true })

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name)
    const sourcePath = path.join(directory, entry.name)
    const targetPath = path.join(rootDir, relativePath)

    if (entry.isDirectory()) {
      await mkdir(targetPath, { recursive: true })
      await copyDirectory(sourcePath, relativePath)
    } else if (entry.isFile()) {
      await mkdir(path.dirname(targetPath), { recursive: true })
      await cp(sourcePath, targetPath)
      files.push(relativePath.split(path.sep).join('/'))
    }
  }
}

await copyDirectory(distDir)
files.sort()

await writeFile(
  manifestPath,
  `${JSON.stringify({ files }, null, 2)}\n`,
  'utf8'
)

console.log(`Published ${files.length} generated files to the repository root.`)
