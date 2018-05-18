module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	watch: {
		src: {
			files: ['scss/*.scss'],
			tasks: ['sass'],
		}
	},
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
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');

grunt.registerTask('default', ['sass']);

};
