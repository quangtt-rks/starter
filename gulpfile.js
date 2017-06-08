var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var streamqueue  = require('streamqueue');


var paths = {
    scripts: ['assets/js/index.js'],
    css: ['assets/css/screen.css']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['assets/js/min/index.min.js'], cb);
    del(['assets/css/min/screen.min.css'], cb);
});

gulp.task('minify-js', function() {
    // Minify and copy all JavaScript
    return streamqueue({objectMode: true},
        gulp.src('assets/js/index.js')
    )
        .pipe(uglify())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('assets/js/min'));
});

gulp.task('minify-css', function() {
    return streamqueue({ objectMode: true },
        gulp.src('assets/css/screen.css')
    )
        .pipe(minifyCSS())
        .pipe(concat('screen.min.css'))
        .pipe(gulp.dest('assets/css/min'))
        .once('end', function(){
            console.log('✓ Done!');
            process.exit();
        });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['minify-js']);
    gulp.watch(paths.css, ['minify-css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'minify-js', 'minify-css']);
