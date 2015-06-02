module.exports = function(config) {
  config.set({
    
    basePath: '',

    frameworks: ['jasmine'],

    exclude: [ ],

    reporters: ['progress', 'spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ( process.env.TRAVIS ? [ 'PhantomJS' ] : [ 'PhantomJS', 'Chrome', 'Firefox' ] ),

    captureTimeout: 30000,

    reportSlowerThan: 1000,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ]
  });
};

