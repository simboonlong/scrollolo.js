module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // jshint scripts
        jshint: {
            all: [
                'site/scrollolo.js',
                'site/main.js'
            ] // only jshint my own custom scripts
        },

        // uglify and optimize js to minified version
        uglify: {
            dist: {
                files: {
                    'site/scrollolo.min.js': ['site/scrollolo.js']
                }
            }
        },

        // watch for changes in development files
        watch: {
            scripts: {
                options: {
                    livereload: true
                },
                files: ['site/**/*.js'],
                tasks: ['jshint']
            }
        }

    });

    // Tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['uglify']);

};
