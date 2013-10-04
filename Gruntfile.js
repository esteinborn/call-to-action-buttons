/*global module: false */
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: [
          'scss/**/*.scss'
        ],
        tasks: [
          'compass:dev',
          'beep:3'
        ]
      }
    },
    compass: {
      options: {
        require: [
          'breakpoint'
        ],
        cssDir: 'css',
        sassDir: 'scss',
        environment: 'development',
        imagesDir: 'img',
        javascriptsDir: 'js',
        outputStyle: 'nested', //nested, expanded, compact, compressed
        relativeAssets: true,
        force: true
      },
      dev: {
        options: {
          force: true
        }
      },
      prod: {
        options: {
          noLineComments: true

        }
      }
    },
    cssmin: {
      all: {
        files: [
          {
            src: 'css/cta.css',
            dest: 'css/cta.min.css'
          },
          {
            src: 'css/cta-flat.css',
            dest: 'css/cta-flat.min.css'
          },
          {
            src: 'css/site.css',
            dest: 'css/site.min.css'
          }
        ]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-beep');

  // Development
  grunt.registerTask('dev', 'Development build', function(args) {
     // grunt.log.write("my message");
    grunt.task.run([
      'compass:dev',
      'beep:3'
    ]);
  });

  grunt.registerTask('prod', 'Production build', function(args) {
    grunt.task.run([
      'compass:prod',
      'cssmin:all',
      'beep:3'
    ]);
  });

  // Default task (Force to development build)
  grunt.registerTask('default', 'dev');
};
