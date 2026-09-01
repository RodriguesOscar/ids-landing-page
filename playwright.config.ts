import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:43173',
    browserName: 'chromium',
    headless: true,
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 43173',
    reuseExistingServer: false,
    url: 'http://127.0.0.1:43173',
  },
})
