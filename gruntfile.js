module.exports = function (grunt) {
    grunt.initConfig({
        'docker-clone': {
            build: {
                inpath: 'gruntfile.js',
                branch: 'cmg-pages'
            }
        }
    });
    grunt.loadNpmTasks('grunt-docker-clone');
};
