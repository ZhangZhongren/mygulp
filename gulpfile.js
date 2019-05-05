// 引入gulp
var gulp = require("gulp");
// 引入pug插件
var pug = require("gulp-pug");
// 引入less插件
var less = require("gulp-less");
// 引入plumber出错不中断监控插件
var plumber = require("gulp-plumber");
// 引入clean-css css压缩插件
var cleanCss = require("gulp-clean-css");
// 引入gulp-autoprefixer css浏览器兼容
var  autoprefixer = require('gulp-autoprefixer');
// 引入gulp-uglify js压缩插件
var uglify = require('gulp-uglify');
// 引入gulp-rename 重命名
var rename = require('gulp-rename');

var babel = require("gulp-babel");
// gulp.task定义任务
gulp.task("1hao",function(){
	// gulp.src 文件位置
	gulp.src("pug/*.pug")
		.pipe(plumber())
		.pipe(pug())//pug -> html
		.pipe(gulp.dest("dist/html/"));
})
gulp.task("2hao",function(){
	gulp.src("less/*.less")
		.pipe(plumber())
		.pipe(less())//less -> css
        .pipe(cleanCss())
        .pipe(autoprefixer({browsers: ['last 2 versions', 'Android >= 4.0']}))
		.pipe(gulp.dest("dist/css/"))
})
gulp.task('zzr', function() {
	gulp.src('js/*.js')
	.pipe(babel()) 
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest("dist/minjs/"));
  });
gulp.task("3hao",function(){
	gulp.watch("pug/*.pug",["1hao"])
    gulp.watch("less/*.less",["2hao"])
    gulp.watch("js/*.js",["zzr"])
})

