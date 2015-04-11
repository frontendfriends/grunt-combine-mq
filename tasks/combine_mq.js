/*
* grunt-combine-mq
* https://github.com/frontendfriends/grunt-combine-mq
*
* Copyright (c) 2014 Building Blocks
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {
	grunt.registerMultiTask('combine_mq', 'Grunt wrapper for node-combine-mq', function() {
		var fs = require('fs'),
		chalk = require('chalk'),
		prettyBytes = require('pretty-bytes'),
		combineMq = require('combine-mq');

		var options = this.options({
			beautify: true
		});

		this.files.forEach( function (file, next) {
			var src = file.src[0],
			dest = file.dest;

			if (!grunt.file.exists(src)) {
				grunt.log.warn('Source file "' + src + '" not found.');

				return next();
			}

			// Collect original filesize stats
			var stats = fs.statSync(file.src[0]),
			originalByteSize = stats['size'],
			originalFileSize = prettyBytes(originalByteSize);

			// Process source
			var processed = combineMq.parseCssString(grunt.file.read(src), options);
			// Write file out
			grunt.file.write(file.dest, processed);

			// Collect processed filesize stats
			var processedStats = fs.statSync(file.dest),
			processedByteSize = processedStats['size'],
			processedFileSize = prettyBytes(processedByteSize);

			grunt.log.writeln('File "' + file.dest + '" created: ' + chalk.green(originalFileSize) + ' → ' + chalk.green(processedFileSize));
		});
	});
};
