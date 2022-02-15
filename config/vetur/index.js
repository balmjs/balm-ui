const fs = require('fs');
const config = require('./config');
const coreTagsData = require('./core/tags.json');
const plusTagsData = require('./plus/tags.json');

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

async function saveVeturHelperData(tags, attributes) {
  try {
    await fs.mkdirSync('vetur');
  } catch (e) {
    // console.log('Cannot create folder ', e);
  }

  if (Object.keys(tags).length) {
    try {
      const tagsData = JSON.stringify(tags, null, 2);
      await fs.writeFileSync(`${config.output.vetur}/tags.json`, tagsData);
      console.log('`tags.json` is ready');

      if (Object.keys(attributes).length) {
        try {
          const attributesData = JSON.stringify(attributes, null, 2);
          await fs.writeFileSync(
            `${config.output.vetur}/attributes.json`,
            attributesData
          );
          console.log('`attributes.json` is ready');
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log('Invalid attributes');
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log('Invalid tags');
  }
}

async function createVeturHelper() {
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
