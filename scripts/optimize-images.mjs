import { mkdir, stat } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = resolve(projectRoot, 'src/assets/optimized')

const images = [
  {
    source: 'src/assets/hero-campus.png',
    name: 'hero-campus',
    variants: [
      { label: 'mobile', width: 768 },
      { label: 'desktop', width: 1600, budgetKiB: 300 },
    ],
  },
  {
    source: 'src/assets/collaboration-workshop.png',
    name: 'collaboration-workshop',
    variants: [
      { label: 'mobile', width: 640 },
      { label: 'desktop', width: 1024, budgetKiB: 180 },
    ],
  },
]

async function createVariant({ source, name, variant }) {
  const input = resolve(projectRoot, source)
  const filename = `${name}-${variant.label}`
  const pipeline = sharp(input).resize({ width: variant.width, withoutEnlargement: true })

  await Promise.all([
    pipeline.clone().avif({ quality: 50, effort: 6 }).toFile(resolve(outputDirectory, `${filename}.avif`)),
    pipeline.clone().webp({ quality: 68, effort: 6 }).toFile(resolve(outputDirectory, `${filename}.webp`)),
  ])

  const avifSizeKiB = (await stat(resolve(outputDirectory, `${filename}.avif`))).size / 1024

  if (variant.budgetKiB && avifSizeKiB > variant.budgetKiB) {
    throw new Error(`${filename}.avif is ${avifSizeKiB.toFixed(1)} KiB; budget is ${variant.budgetKiB} KiB.`)
  }

  console.log(`${filename}.avif: ${avifSizeKiB.toFixed(1)} KiB`)
}

await mkdir(outputDirectory, { recursive: true })

for (const image of images) {
  for (const variant of image.variants) {
    await createVariant({ ...image, variant })
  }
}
