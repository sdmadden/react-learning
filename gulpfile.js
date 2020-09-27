const { src, dest, series, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const eslint = require('gulp-eslint')
const del = require('del')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const babelify = require('babelify')
const stylelint = require('gulp-stylelint')

const srcPath = './src'
const distPath = './dist'
const cssPath = srcPath + '/sass'
const config = {
  paths: {
    static: [
      srcPath + '/static/**/*',
      srcPath + '/index.html'
    ],
    js: srcPath + '/**/*.js',
    css: [
      cssPath + '/**/*.scss',
      '!' + cssPath + 'colours.scss'
    ],
    dist: {
      base: distPath,
      css: distPath + '/css'
    }
  },
  bundle: {
    entry: srcPath + '/index.js',
    jsTarget: 'index.min.js'
  }
}

function lint_js() {
  return src(config.paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
}

function lint_css() {
  return src(config.paths.css)
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }))
}

function lint_css_fix() {
  return src(config.paths.css)
    .pipe(stylelint({
      fix: true,
      reporters: [{ formatter: 'string', console: true }]
    }))
    .pipe(dest(cssPath))
}

function clean() {
  return del(distPath + '**/*')
}

function js() {
  return browserify(config.bundle.entry)
    .transform(babelify)
    .bundle()
    .pipe(source(config.bundle.jsTarget))
    .pipe(dest(config.paths.dist.base))
}

function static_files() {
  return src(config.paths.static)
    .pipe(dest(config.paths.dist.base))
}

function css() {
  return src(config.paths.css)
    .pipe(sass())
    .pipe(dest(config.paths.dist.css))
}

function build(...args) {
  return parallel(series(lint_js, js), series(lint_css, css), static_files)(...args)
}

function watching() {
  watch(config.paths.js, series(lint_js, js))
  watch(config.paths.css, series(lint_css, css))
  watch(config.paths.static, static_files)
}

exports.default = series(clean, build, watching)
exports.clean = clean
exports.build = build
exports.watch = watching
exports.fixcss = lint_css_fix
