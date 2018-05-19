var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src([
        './node_modules/vue/dist/vue.js',
        './node_modules/vue-router/dist/vue-router.js' 
    ]).pipe(gulp.dest('./public/lib/'));
});