import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const outputDirectory = process.argv[2]
const profile = process.argv[3] ?? 'Lighthouse'

if (!outputDirectory) {
  throw new Error('Usage: node scripts/report-lighthouse-median.mjs <report-directory>')
}

const manifestPath = resolve(outputDirectory, 'manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const representativeRun = manifest.find((entry) => entry.isRepresentativeRun)

if (manifest.length !== 3 || !representativeRun) {
  throw new Error('Expected three Lighthouse runs with one representative run.')
}

const report = JSON.parse(await readFile(representativeRun.jsonPath, 'utf8'))
const auditValue = (auditId) => report.audits[auditId]?.numericValue
const formatMilliseconds = (value) => `${Math.round(value)} ms`
const formatKilobytes = (value) => `${Math.round(value / 1024)} KiB`
const formatScore = (value) => Math.round(value * 100)
const criticalRequestChains = report.audits['network-dependency-tree']?.details?.chains ?? {}

console.log(`${profile} Lighthouse representative run`)
console.log(`Performance: ${formatScore(report.categories.performance.score)}`)
console.log(`FCP: ${formatMilliseconds(auditValue('first-contentful-paint'))}`)
console.log(`LCP: ${formatMilliseconds(auditValue('largest-contentful-paint'))}`)
console.log(`Speed Index: ${formatMilliseconds(auditValue('speed-index'))}`)
console.log(`TBT: ${formatMilliseconds(auditValue('total-blocking-time'))}`)
console.log(`CLS: ${auditValue('cumulative-layout-shift').toFixed(3)}`)
console.log(`Transfer size: ${formatKilobytes(auditValue('total-byte-weight'))}`)
console.log(`Critical request chains: ${Object.keys(criticalRequestChains).length}`)
console.log(`Report: ${representativeRun.htmlPath}`)
