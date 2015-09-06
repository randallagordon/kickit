'use strict'

module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: [
      'app/**/*.spec.js'
    ],
    preprocessors: {
      'app/**/*.spec.js': 'browserify'
    },
    browserify: {
      debug: true,
      transform: [
        'babelify',
        'partialify',
        ['browserify-babel-istanbul', {
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
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  })
}
