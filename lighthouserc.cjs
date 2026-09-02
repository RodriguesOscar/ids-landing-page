module.exports = {
  ci: {
    collect: {
      url: ['http://127.0.0.1:4174/'],
      numberOfRuns: 3,
      startServerCommand: 'npm run preview -- --host 127.0.0.1 --port 4174',
      startServerReadyPattern: 'http://127\\.0\\.0\\.1:4174',
      startServerReadyTimeout: 30000,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'speed-index': ['error', { maxNumericValue: 3400 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci/desktop',
    },
  },
}
