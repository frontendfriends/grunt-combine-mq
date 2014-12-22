/**
 *
 * @file Combine MQ Test
 * @version 0.7.0
 * @author {@link http://github.com/furzeface Daniel Furze}
 * @link https://github.com/frontendfriends/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 *
 */
 'use strict';

 var grunt = require('grunt');

 exports.combine_mq = {
 	setUp: function(done) {
		// setup here if necessary
		done();
	},
	default_options: function (test) {
		test.expect(1);

		var expected = grunt.file.read('test/expected/test.css'),
		actual = grunt.file.read('test/actual/test.css');

		test.equal(expected, actual, 'should combine matching media queries using combine-mq');

		test.done();
	},
	custom_options: function (test) {
		test.expect(1);

		var expected = grunt.file.read('test/expected/custom_options.css'),
		actual = grunt.file.read('test/actual/custom_options.css');

		test.equal(expected, actual, 'should combine matching media queries using combine-mq, and use custom options');

		test.done();
	},
	minified: function (test) {
		test.expect(1);

		var expected = grunt.file.read('test/expected/test.min.css'),
		actual = grunt.file.read('test/actual/test.min.css');

		test.equal(expected, actual, 'should combine matching media queries using combine-mq and not beautify the result');

		test.done();
	}
};
