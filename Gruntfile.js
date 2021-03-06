module.exports = function(grunt) {
    grunt.registerTask('hello', 'Hello World ...', function() {
        grunt.log.writeln('oh, hello!');
    });

    grunt.registerTask('hello-prod', 'Hello World ...', function() {
        grunt.log.writeln('oh, hello production!');
    });

    grunt.registerTask('hello-dev', 'Hello World ...', function() {
        grunt.log.writeln('oh, hello dev!');
    });

    grunt.registerTask('heroku', 'hello');
    grunt.registerTask('heroku:production', 'hello-prod');
    grunt.registerTask('heroku:development', 'hello-dev');
};