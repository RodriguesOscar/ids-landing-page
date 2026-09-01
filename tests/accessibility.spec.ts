import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const axeTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

for (const language of ['de', 'en'] as const) {
  for (const path of ['/', '/impressum', '/privacy']) {
    test(`has no automatically detectable WCAG A/AA violations on ${path} in ${language}`, async ({ page }) => {
      await page.goto(path)

      if (language === 'en') {
        await page.getByRole('button', { name: 'Englisch auswählen' }).click()
        await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      }

      const results = await new AxeBuilder({ page }).withTags(axeTags).analyze()

      expect(results.violations).toEqual([])
    })
  }
}

test('switches the document language and preserves an exposed selected state', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Englisch auswählen' }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('button', { name: 'Select English' })).toHaveAttribute('aria-pressed', 'true')
})

test('moves focus to main content from the skip link', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Zum Inhalt springen' }).focus()
  await page.keyboard.press('Enter')

  await expect(page.locator('main')).toBeFocused()
})

test('provides an operable mobile menu and focuses same-page destinations', async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 720 })
  await page.goto('/')

  const toggle = page.getByRole('button', { name: 'Navigation öffnen' })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await expect(page.getByRole('button', { name: 'Navigation schließen' })).toHaveAttribute('aria-expanded', 'true')

  await page.getByRole('link', { name: 'Projekte', exact: true }).click()
  await expect(page).toHaveURL(/#projekte$/)
  await expect(page.locator('#projekte')).toBeFocused()

  await page.getByRole('button', { name: 'Navigation öffnen' }).click()
  await page.getByRole('link', { name: 'Institut', exact: true }).focus()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: 'Navigation öffnen' })).toBeFocused()
})

test('reflows without horizontal scrolling at the mobile breakpoint', async ({ page }) => {
  await page.setViewportSize({ width: 760, height: 720 })

  for (const path of ['/', '/impressum', '/privacy']) {
    await page.goto(path)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
  }
})
