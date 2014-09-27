/*
 * grunt-combine-mq
 * https://github.com/buildingblocks/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
      'tmp'
      ]
    },
    // Unit tests.
    nodeunit: {
      tests: [
      'test/*_test.js'
      ]
    },
    // Configuration to be run (and then tested).
    combine_mq: {
      default_options: {
        expand: true,
        cwd: 'test/styles',
        src: 'test.css',
        dest: 'test/actual/'
      },
      new_filename: {
        src: 'test/styles/test.css',
        dest: 'test/actual/new_filename.css'
      }
    }
  });
  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'combine_mq',
    'nodeunit'
  ]);
  // By default, lint and run all tests.
  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};
