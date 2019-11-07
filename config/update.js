const { src, dest, task, series } = require('gulp');
const $replace = require('gulp-replace');
const https = require('https');
const fs = require('fs');

// Update Material Components Web for BalmUI
const mdcDir = './src/material-components-web/';
const level0 = ['material-components-web.scss'];
const level1 = [
  'button',
  'card',
  'checkbox',
  'chips',
  'data-table',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'floating-label',
  'form-field',
  'grid-list',
  'icon-button',
  'image-list',
  'line-ripple',
  'linear-progress',
  'list',
  'menu',
  'menu-surface',
  'notched-outline',
  'radio',
  'ripple',
  'select',
  'slider',
  'shape',
  'snackbar',
  'switch',
  'tab',
  'tab-bar',
  'tab-indicator',
  'tab-scroller',
  'textfield',
  'theme',
  'top-app-bar',
  'typography'
];
const level2 = [
  'chips/chip',
  'chips/chip-set',
  'drawer/dismissible',
  'drawer/modal',
  'select/helper-text',
  'select/icon',
  'textfield/helper-text',
  'textfield/icon',
  'textfield/character-counter',
  'top-app-bar/fixed',
  'top-app-bar/short',
  'top-app-bar/standard'
];

let index = 0;
let updateMDCTasks = [];

level0.forEach(function(file) {
  let name = `update:mdc:${index}`;
  task(name, () => {
    return src(mdcDir + file)
      .pipe($replace('@material/', './'))
      .pipe(dest(mdcDir));
  });
  updateMDCTasks.push(name);
  index++;
});

level1.forEach(function(file) {
  const name = `update:mdc:${index}`;
  task(name, () => {
    return src(mdcDir + file + '/*')
      .pipe($replace('@material/', '../'))
      .pipe(dest(mdcDir + file));
  });
  updateMDCTasks.push(name);
  index++;
});

level2.forEach(function(file) {
  const name = `update:mdc:${index}`;
  task(name, () => {
    return src(mdcDir + file + '/*')
      .pipe($replace('@material/', '../../'))
      .pipe(dest(mdcDir + file));
  });
  updateMDCTasks.push(name);
  index++;
});

task('update:mdc', series(updateMDCTasks));

// Get Material Icons
const materialicons = ['Y.eot', 'c.woff2', 'a.woff', 'Z.ttf'];

function updateMDITask(cb) {
  https
    .get('https://fonts.googleapis.com/icon?family=Material+Icons', res => {
      if (res.statusCode === 200) {
        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          const result = data.match(/materialicons\/v(\d+)\//);
          const version = result[1];

          console.log(`Material Icons latest version: ${version}`);

          materialicons.forEach(font => {
            const suffix = font.split('.')[1];
            const filename = `MaterialIcons-Regular.${suffix}`;
            const file = fs.createWriteStream(
              `./src/material-design-icons/latest/${filename}`
            );

            const request = https.get(
              `https://fonts.gstatic.com/s/materialicons/v${version}/flUhRq6tzZclQEJ-Vdg-IuiaDsN${font}`,
              response => {
                response.pipe(file);
              }
            );
            request.on('close', () => {
              console.log(`${filename} downloaded`);
            });
            request.on('error', e => {
              console.error(e);
            });
          });
        });
      } else {
        console.warn('F**k G-F-W');
      }
    })
    .on('error', e => {
      console.error(e);
    });
  cb();
}

task('update:mdi', updateMDITask);
