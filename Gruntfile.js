module.exports = function(grunt) {
    grunt.registerTask('hello', 'Hello World ...', function() {
        grunt.log.writeln('oh, hello!');
    });

    grunt.registerTask('heroku', 'hello');
};