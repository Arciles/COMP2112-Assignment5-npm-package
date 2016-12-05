// Project configuration.
'use strict';
module.exports = function(grunt){
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      build: {
        src: 'build/chatbot.js',
        dest: 'demo/build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      files: {
        cwd: '/build',                       // set working folder / root to copy
        src: 'build', // copy all files and subfolders
        dest: 'demo/build',                  // destination folder
        expand: true                         // required when using cwd
      }
    }
  });
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask('default', function(target) {
    grunt.task.run('uglify');
    grunt.task.run('copy');
  });
};
