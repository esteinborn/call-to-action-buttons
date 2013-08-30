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
                    'breakpoint',
                    //'sass-media_query_combiner',
                    //'toolkit'
                ],
                //basePath: "/",
                cssDir: 'css',
                sassDir: 'scss',
                environment: 'development',
                imagesDir: 'images',
                javascriptsDir: 'js',
                outputStyle: 'expanded', //nested, expanded, compact, compressed
                //noLineComments: true,
                relativeAssets: true,
                //sourcemap: true,
                force: true
            },
            dev: {
                options: {
                    //basePath: "/"
                    //debugInfo: true
                }
            },
            prod: {
                options: {
                    outputStyle: 'compressed',
                    environment: 'production'
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
            'beep:3'
        ]);
    });

    // Default task (Force to development build)
    grunt.registerTask('default', 'dev');
};
