const webpackConfig = require('./webpack.config.dev')

module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: 'client',
    browsers: ['Chrome'],
    colors: true,
    concurrency: Infinity,
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../coverage/', subdir: '.' },
        { type: 'json', dir: '../coverage/', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    files: [
      {pattern: 'src/*-spec.js', watched: false}
    ],
    frameworks: ['mocha', 'chai'],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      'src/**/*-spec.js': ['webpack','sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  })
}
