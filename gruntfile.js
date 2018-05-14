//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/styles.css':
                    'scss/styles.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'min-js/file.min.js': ['js/file.js']
                }
            }
        },
        
        jshint: {
            src: ['js/*.js']
        },
            
        watch: {
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            },
            uglify: {
                files: ['js/*.js'],
                tasks: ['uglify']
            },
            jsint: {
                files: ['js/*.js'],
                tasks: ['jshint']
            }
        }
    });

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['sass']);
};
