const fs = require('fs');
const https = require('https');
const { src, dest, task, series } = require('gulp');
const $replace = require('gulp-replace');

// updated: 2020.09.08
const LATEST_VERSIONS = {
  filled: 55,
  outlined: 27,
  round: 26,
  twoTone: 25
  // sharp: 27 // Flagged: GPL-3.0-only
};

// Update Material Components Web for BalmUI
const mdcDir = './src/material-components-web/';
const level0 = ['material-components-web.scss'];
const level1 = [
  'banner',
  'button',
  'card',
  'checkbox',
  'chips',
  'circular-progress',
  'data-table',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'floating-label',
  'form-field',
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
  'segmented-button',
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
  'tooltip',
  'top-app-bar',
  'touch-target',
  'typography'
];
const level2 = [
  'chips/chip',
  'chips/chip-set',
  'chips/trailingaction',
  'drawer/dismissible',
  'drawer/modal',
  'segmented-button/segment',
  'segmented-button/segmented-button',
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

level0.forEach((file) => {
  let name = `update:mdc:${index}`;
  task(name, () => {
    return src(mdcDir + file)
      .pipe($replace('@material/', './'))
      .pipe(dest(mdcDir));
  });
  updateMDCTasks.push(name);
  index++;
});

level1.forEach((file) => {
  const name = `update:mdc:${index}`;
  task(name, () => {
    return src(mdcDir + file + '/*')
      .pipe($replace('@material/', '../'))
      .pipe(dest(mdcDir + file));
  });
  updateMDCTasks.push(name);
  index++;
});

level2.forEach((file) => {
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
const MDI_baseUrl = 'https://fonts.gstatic.com/s/materialicons';
const MDI_regularStyle = 'filled';
const MaterialIconsFonts = [
  {
    style: MDI_regularStyle,
    url: `/v${LATEST_VERSIONS.filled}/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff`
  },
  {
    style: MDI_regularStyle,
    url: `/v${LATEST_VERSIONS.filled}/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2`
  },
  {
    style: 'outlined',
    url: `outlined/v${LATEST_VERSIONS.outlined}/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2`
  },
  {
    style: 'round',
    url: `round/v${LATEST_VERSIONS.round}/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2`
  },
  {
    style: 'two-tone',
    url: `twotone/v${LATEST_VERSIONS.twoTone}/hESh6WRmNCxEqUmNyh3JDeGxjVVyMg4tHGctNCu0NjbrHg.woff2`
  }
  // {
  //   style: 'sharp',
  //   url: `sharp/v${LATEST_VERSIONS.sharp}/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2`
  // }
];

function updateMDITask(cb) {
  https
    .get('https://fonts.googleapis.com/icon?family=Material+Icons', (res) => {
      if (res.statusCode === 200) {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          const result = data.match(/materialicons\/v(\d+)\//);
          const version = result[1];

          console.log(`Material Icons latest version: ${version}`);

          MaterialIconsFonts.forEach((iconFont) => {
            const suffix = iconFont.url.split('.')[1];
            const filename =
              iconFont.style === MDI_regularStyle
                ? `material-icons.${suffix}`
                : `material-icons-${iconFont.style}.${suffix}`;
            const file = fs.createWriteStream(
              `./src/material-icons/${filename}`
            );
            const request = https.get(
              `${MDI_baseUrl}${iconFont.url}`,
              (response) => {
                response.pipe(file);
              }
            );
            request.on('close', () => {
              console.log(`${filename} downloaded`);
            });
            request.on('error', (e) => {
              console.error(e);
            });
          });
        });
      } else {
        console.warn('F**k G-F-W');
      }
    })
    .on('error', (e) => {
      console.error(e);
    });

  cb();
}

task('update:mdi', updateMDITask);

// Set Material Icons Category
// const MDI_JSON = 'https://fonts.google.com/metadata/icons'; // NOTE: manual download `json.txt`
const sourceData = './docs/data/txt.json';
const targetData = './docs/data/icons.json';

function updateMDIJson(cb) {
  let uiIconsData = {
    icons: {},
    tags: {}
  };

  fs.readFile(sourceData, (err, data) => {
    const jsonData = JSON.parse(data);
    let uiTags = [];
    jsonData.icons.forEach((icon, index) => {
      const id = index + 1;

      item = {
        id,
        name: icon.name,
        tags: icon.tags
      };

      icon.categories.forEach((category) => {
        if (uiIconsData.icons[category]) {
          uiIconsData.icons[category].push(item);
        } else {
          uiIconsData.icons[category] = [item];
        }

        item.tags.forEach((tag) => {
          if (uiIconsData.tags[tag]) {
            if (!uiIconsData.tags[tag].includes(item.id)) {
              uiIconsData.tags[tag].push(item.id);
            }
          } else {
            uiIconsData.tags[tag] = [item.id];
          }
        });

        uiTags.push(...item.tags);
      });
    });

    uiIconsData.tags = [...new Set(uiTags)].sort();
    // console.log(uiIconsData.tags);

    fs.writeFile(targetData, JSON.stringify(uiIconsData), 'utf8', (err) => {
      if (err) throw err;
      console.log('The icons has been saved!');
    });
  });

  cb();
}

task('update:mdi:json', updateMDIJson);
