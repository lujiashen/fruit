var gulp = require("gulp");
 //引入插件
var cssmin = require('gulp-cssmin'); //压缩CSS
 var htmlmin = require('gulp-htmlmin'); //压缩html
 var uglify = require('gulp-uglify');
 //配置任务
 gulp.task('cssmin', function() {
     gulp.src('css/*.css')
         .pipe(cssmin())
         .pipe(gulp.dest('mincss'))
     //        {compatibility: 'ie8'}  兼容ie8
 });gulp.task('htmlmin', function() {
     var options = {
        removeComments: true, //清除HTML注释
         collapseWhitespace: true, //压缩HTML         minfyJS: true,//压缩JS
         minfyCss: true,//压缩CSS
     };
     gulp.src('html/*.html')
　　　　　　　//压缩html
         .pipe(htmlmin(options))
         .pipe(gulp.dest('htmlmin'))
 });
 gulp.task('jsmin',function(){
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("jsmin"))
 })
 
 //注册默认任务
 gulp.task('default', ['css','htmlmin']);
