/*global module:false*/
module.exports = function(grunt) {

  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
    clean: {
      css: {
        src: ['dest/css/*']
      },
      html:{
        src: ['dest/*.html']
      }
    },
    concat : {
        build: {
          src: [
              'js/blog.js'
            ],
            dest: "dest/js/blog.js"
        },
        css : {
            src: [
              'css/blog.css'
            ],
          dest:'dest/css/blog.css'
        }
    },
    uglify: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      bulid: {
        files: [
        {
          "dest/js/blog.min.js": ['dest/js/blog.js']
        },
        ],
      }
    },
    cssmin: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        beautify: {
          ascii_only: true
        }       
      },
      build: {
        files: [{
          "dest/css/blog.min.css": ['dest/css/blog.css']
        }]
      }
    },
    includereplace: {
        compile: {
          expand: true,
          src: '*.html',
          dest: 'dest/'
      }
    },
    copy: {
        main: {
          files: [
            {expand: true, src: ['lib/*'], dest: 'dest/', filter: 'isFile'},
            {expand: true, src: ['images/*'], dest: 'dest/', filter: 'isFile'}
          ]
        }
    },
    replace: {
        dist: {
          options: {
            patterns: [
              {
                match: 'timestamp',
                replacement: '<%= new Date().getTime() %>'
              },
              {
                match: 'fileAddress',
                replacement: ''
              }
            ]
          },
          files: [
            {expand: true, flatten: true,src: ['dest/*.html'], dest: 'dest/'}
          ]
        }
    }
});
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['clean','concat','uglify','cssmin','copy','includereplace','replace']);

};
