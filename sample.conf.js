module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'public/js/angular.js',
      'public/js/angular-route.js',
      'public/js/angular-messages.js',
      'public/js/app.js',
      'public/js/controllers/listcontroller.js',
      'test/**/*-spec.js'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
