import prismjs from 'prismjs';
import { domain } from '@/config';

function setGlobalProperties(app) {
  app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ui-');

  app.config.globalProperties.$domain = domain;

  app.config.globalProperties.$prism = prismjs;

  app.config.globalProperties.$docs = {
    props: {
      thead: ['Name', 'Type', 'Default', 'Description'],
      tbody: [
        'name',
        'type',
        'default',
        {
          field: 'description',
          raw: true
        }
      ]
    },
    slots: {
      thead: ['Name', 'Description', 'Slot'],
      tbody: ['name', 'description', 'props']
    },
    events: {
      thead: ['Name', 'Type', 'Description'],
      tbody: ['name', 'type', 'description']
    },
    sass: {
      thead: ['Variable', 'Description'],
      tbody: [
        'var',
        {
          field: 'description',
          raw: true
        }
      ]
    }
  };
}

export default setGlobalProperties;
