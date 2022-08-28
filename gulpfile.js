var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');
gulp.task('default', function () {
    return gulp.src('src/less/index.less')
        .pipe(less())    //编译成为css
        .pipe(gulp.dest('build/css'))    //输出到指定目录
});


gulp.task('ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('built/local'));
});
