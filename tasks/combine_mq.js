/*
 * grunt-combine-mq
 * https://github.com/buildingblocks/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('combine_mq', 'Grunt plugin for node-combine-mq', function() {
    var combineMq = require('combine-mq');
    this.files.forEach( function (file, next) {
      if (!grunt.file.exists(file.src[0])) {
        grunt.log.warn('Source file "' + file.src + '" not found.');
        return next();
      }
      var processedFile = combineMq.parseFile(grunt.file.read(file.src[0]));
      grunt.file.write(file.dest, processedFile);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};
