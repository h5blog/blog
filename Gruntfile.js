module.exports = function(grunt) {

  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
    clean: {
      css: {
        src: ['h5/css/*']
      },
      js:{
        src: ['h5/js/*']
      },
      js:{
        src: ['h5/*.html']
      }
    },
    concat : {
        build: {
          src: [
              'js/blog.js'
            ],
            dest: "h5/js/blog.js"
        },
        css : {
            src: [
              'css/blog.css'
            ],
          dest:'h5/css/blog.css'
        }
    },
    uglify: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      bulid: {
        files: [
        {
          "h5/js/blog.min.js": ['h5/js/blog.js']
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
          "h5/css/blog.min.css": ['h5/css/blog.css']
        }]
      }
    },
    includereplace: {
        compile: {
          expand: true,
          src: '*.html',
          dest: 'h5/'
      }
    },
    copy: {
        main: {
          files: [
            {expand: true, src: ['lib/*'], dest: 'h5/', filter: 'isFile'},
            {expand: true, src: ['images/*'], dest: 'h5/', filter: 'isFile'}
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
            {expand: true, flatten: true,src: ['h5/*.html'], dest: 'h5/'}
          ]
        }
    },
    watch:{
      html:{
        files:['html_modules/*.html','*.html'],
        tasks:['clean','concat','uglify','cssmin','includereplace','replace','copy']
      }
    } 
});
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean','concat','uglify','cssmin','includereplace','replace','copy','watch']);

};
