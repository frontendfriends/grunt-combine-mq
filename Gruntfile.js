 /**
 *
 * @file Gruntfile
 * @version 0.7.0
 * @author {@link http://github.com/furzeface Daniel Furze}
 * @link https://github.com/frontendfriends/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 *
 */
 'use strict';

 module.exports = function(grunt) {
  // Load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

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
    		cwd: 'test/fixtures',
    		src: 'test.css',
    		dest: 'test/actual/'
    	},
    	new_filename: {
    		src: 'test/fixtures/test.css',
    		dest: 'test/actual/custom_options.css'
    	},
    	minified: {
    		options: {
    			beautify: false
    		},
    		src: 'test/fixtures/test.css',
    		dest: 'test/actual/test.min.css'
    	}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this plugin's task(s), then test the result.
  grunt.registerTask('test', [
  	'clean',
  	'combine_mq',
  	'nodeunit'
  	]);

  // By default, lint and run all tests.
  grunt.registerTask('default', [
  	// 'jshint',
  	'test'
  	]);
};
