const webpackConfig = require('./webpack.config.dev')

module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: 'src',
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    colors: true,
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../coverage/', subdir: '.' },
        { type: 'json', dir: '../coverage/', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    files: [
      {pattern: '/**/*-spec.js', watched: false}
    ],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '/**/*-spec.js': ['webpack','sourcemap']
    },
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    plugins: [
      'karma-mocha'
    ],
    'client' : {
      'mocha' : {
        'ui' : 'tdd'
      }
    }
  })
}
