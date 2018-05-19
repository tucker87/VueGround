var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('./node_modules/vue/dist/vue.js')
        .pipe(gulp.dest('./public/lib/'));
});