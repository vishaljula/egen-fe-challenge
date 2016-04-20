module.exports = function(grunt) {
	// Project configuration. 
	grunt.initConfig({
	concat: {
	      js: {
	      src: ['public/js/app.js', 'public/js/controllers/listcontroller.js', 'public/js/controllers/profilecontroller.js', 'public/js/services/sharedservice.js'],
	      dest: 'build/scripts.js',
	    },
	  },
	watch: {
	  scripts: {
	    files: ['public/js/**/*.js'],
	    tasks: ['concat:js'],
	  },
	},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'watch']);
};