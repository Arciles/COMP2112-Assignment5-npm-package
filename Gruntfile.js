// Project configuration.
'use strict';
module.exports = function(grunt){
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
     vendor: {
       src: 'src/index.js',
       dest: 'build/index.js'
     }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      build: {
        src: 'build/index.js',
        dest: 'build/index.min.js'
      }
    },
    copy: {
      main: {
        files: [
            {expand: true,
               src: ['build/*'],
               dest: 'demo/build/',
               flatten: true}
        ]
      }
    }
  });
  grunt.registerTask('default', function(target) {
    grunt.task.run('browserify');
    grunt.task.run('uglify');
    grunt.task.run('copy');
  });
};
