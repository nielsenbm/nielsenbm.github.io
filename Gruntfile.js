module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'css/style.css': 'scss/style.scss'
			}
		}
	}
});

grunt.registerTask('default', ['sass']);

};
