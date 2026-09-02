module.exports = {
  ci: {
    collect: {
      url: ['http://127.0.0.1:4175/'],
      numberOfRuns: 3,
      startServerCommand: 'npm run preview -- --host 127.0.0.1 --port 4175',
      startServerReadyPattern: 'http://127\\.0\\.0\\.1:4175',
      startServerReadyTimeout: 30000,
      settings: {
        formFactor: 'mobile',
        throttlingMethod: 'simulate',
        chromeFlags: '--disable-extensions --disable-default-apps --no-first-run',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci/mobile',
    },
  },
}
