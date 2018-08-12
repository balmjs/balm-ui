var gulp = require('gulp');
var $replace = require('gulp-replace');

var mdcDir = './src/material-components-web/';
var level0 = ['material-components-web.scss'];
var level1 = [
  'button',
  'card',
  'checkbox',
  'chips',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'floating-label',
  'form-field',
  'grid-list',
  'icon-button',
  'icon-toggle',
  'image-list',
  'line-ripple',
  'linear-progress',
  'list',
  'menu',
  'notched-outline',
  'radio',
  'ripple',
  'select',
  'selection-control',
  'slider',
  'snackbar',
  'switch',
  'tab',
  'tab-bar',
  'tab-indicator',
  'tab-scroller',
  'textfield',
  'toolbar',
  'top-app-bar'
];
var level2 = [
  'chips/chip',
  'chips/chip-set',
  'drawer/permanent',
  'drawer/persistent',
  'drawer/slidable',
  'drawer/temporary',
  // 'tabs/tab',
  // 'tabs/tab-bar',
  // 'tabs/tab-bar-scroller',
  'textfield/helper-text',
  'textfield/icon'
];

var index = 0;

level0.forEach(function(file) {
  gulp.task('update:mdc:' + index, function() {
    return gulp
      .src(mdcDir + file)
      .pipe($replace('@material/', './'))
      .pipe(gulp.dest(mdcDir));
  });
  index++;
});

level1.forEach(function(file) {
  gulp.task('update:mdc:' + index, function() {
    return gulp
      .src(mdcDir + file + '/*')
      .pipe($replace('@material/', '../'))
      .pipe(gulp.dest(mdcDir + file));
  });
  index++;
});

level2.forEach(function(file) {
  gulp.task('update:mdc:' + index, function() {
    return gulp
      .src(mdcDir + file + '/*')
      .pipe($replace('@material/', '../../'))
      .pipe(gulp.dest(mdcDir + file));
  });
  index++;
});

var updateMDCTasks = [];

for (var i = 0; i < index; i++) {
  updateMDCTasks.push('update:mdc:' + i);
}

gulp.task('update:mdc', updateMDCTasks);
