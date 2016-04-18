var gulp 			= require('gulp'),
	concat 			= require('gulp-concat'), 
	compass			= require('gulp-compass'); 
	


var jsSources 	= [
					'public/js/angular-messages.js', 						//All js files go here
					'public/js/angular-route.js',
					'public/js/angular.js',
					'public/js/app.js',
					'public/js/controllers/listcontroller.js'
				  ];



gulp.task('js', function () {
	gulp.src(jsSources)                							//Source files that are to be concatenated
		.pipe(concat('script.js'))	   							//Output will be in a var called concat and it will be called sript.js
		.pipe(gulp.dest('public/js'))
	});