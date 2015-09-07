module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: [
      'app/index.js',
      'app/**/*.spec.js'
    ],
    preprocessors: {
      'app/index.js': 'browserify',
      'app/**/*.spec.js': 'browserify'
    },
    browserify: {
      debug: true,
      transform: [
        'babelify',
        'partialify',
        ['browserify-istanbul', {
          ignore: ['**/node_modules/**', '**/*.spec.js']
        }]
      ]
    },
    browsers: ['PhantomJS'],
    reporters: ['coverage', 'threshold', 'progress'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'html',
          subdir: 'report-html'
        },
        {
          type: 'json-summary',
          subdir: 'report-json'
        }
      ]
    },
    thresholdReporter: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  })
}
