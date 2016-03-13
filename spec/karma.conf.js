module.exports = function(config) {
  config.set({

    basePath : '../',

    files : [
      'bower_components/d3/d3.min.js',
      'bower_components/jquery/dist/jquery.min.js',
      'dist/gantt-chart.min.js',
      'spec/helpers/testData.js',
      'spec/*.spec.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
