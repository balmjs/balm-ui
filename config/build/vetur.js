const fs = require('fs');
const tags = require('../vetur/tags.json');

async function createVeturHelper(mix) {
  mix.copy('config/vetur/tags.json', 'vetur');

  let attributes = {};

  for await (const tag of Object.keys(tags)) {
    const file = `./config/vetur/attributes/${tag}.json`;

    try {
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

  if (Object.keys(attributes).length) {
    const data = JSON.stringify(attributes, null, 2);
    fs.writeFile('./vetur/attributes.json', data, (err) => {
      if (err) throw err;
      console.log('`attributes.json` is ready');
    });
  } else {
    console.log('Invalid attributes');
  }
}

module.exports = createVeturHelper;
