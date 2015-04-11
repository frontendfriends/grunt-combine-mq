/*
 * grunt-combine-mq v0.9.0
 * https://github.com/frontendfriends/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: [
        'Gruntfile.js'
      ],
      task: [
        'tasks/*.js'
      ],
      tests: [
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously created files
    clean: {
      tests: [
      'tmp'
      ]
    },

    // Unit tests
    nodeunit: {
      tests: [
      'test/*_test.js'
      ]
    },

    // Configuration to be run (and then tested)
    combine_mq: {
      default_options: {
        expand: true,
        cwd: 'test/fixtures',
        src: 'test.css',
        dest: 'test/actual/'
      },
      new_filename: {
        src: 'test/fixtures/test.css',
        dest: 'test/actual/new_filename.css'
      },
      no_beautify: {
      	options :{
      		beautify: false
      	},
      	src: 'test/fixtures/test.css',
        dest: 'test/actual/no_beautify.css'
      }
    }
  });

  // Load this plugin’s task
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this plugin’s task, then test the result
  grunt.registerTask('test', [
    'clean',
    'combine_mq',
    'nodeunit'
  ]);

  // By default, lint and run all tests
  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};
