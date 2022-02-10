const fs = require('fs');
const config = require('./config');
const coreTagsData = require('../vetur/core/tags.json');
const plusTagsData = require('../vetur/plus/tags.json');

const tagsData = {
  core: coreTagsData,
  plus: plusTagsData
};

async function loadVeturHelperData(type) {
  let tags = {};
  let attributes = {};

  const currentTagsData = tagsData[type];
  for await (const tag of Object.keys(currentTagsData)) {
    tags[tag] = currentTagsData[tag];

    if (!config.noAttributesTags.includes(tag)) {
      try {
        const file = `./config/vetur/${type}/attributes/${tag}.json`;
        const data = await fs.readFileSync(file);
        let componentAttributesData = JSON.parse(data);

        let componentAttributes = {};
        for await (const prop of Object.keys(componentAttributesData)) {
          componentAttributes[`${tag}/${prop}`] = componentAttributesData[prop];
        }
        attributes = Object.assign(attributes, componentAttributes);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return {
    tags,
    attributes
  };
}

function saveVeturHelperData(tags, attributes) {
  if (Object.keys(tags).length) {
    const data = JSON.stringify(tags, null, 2);
    fs.writeFile(`${config.output.vetur}/tags.json`, data, (err) => {
      if (err) throw err;
      console.log('`tags.json` is ready');
    });

    if (Object.keys(attributes).length) {
      const data = JSON.stringify(attributes, null, 2);
      fs.writeFile(`${config.output.vetur}/attributes.json`, data, (err) => {
        if (err) throw err;
        console.log('`attributes.json` is ready');
      });
    } else {
      console.log('Invalid attributes');
    }
  } else {
    console.log('Invalid tags');
  }
}

async function createVeturHelper(mix) {
  mix.remove(config.output.vetur);

  let veturTags = {};
  let veturAttributes = {};

  for await (const type of Object.keys(tagsData)) {
    const { tags, attributes } = await loadVeturHelperData(type);
    veturTags = Object.assign(veturTags, tags);
    veturAttributes = Object.assign(veturAttributes, attributes);
  }

  saveVeturHelperData(veturTags, veturAttributes);
}

module.exports = createVeturHelper;
