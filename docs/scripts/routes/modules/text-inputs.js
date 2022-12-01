const Textfield = () => import('@/views/components/textfield');
const Autocomplete = () => import('@/views/components/autocomplete');
const Editor = () => import('@/views/components/editor');

export default [
  {
    path: 'textfield',
    name: 'text-inputs.textfield',
    component: Textfield
  },
  {
    path: 'autocomplete',
    name: 'text-inputs.autocomplete',
    component: Autocomplete
  },
  {
    path: 'editor',
    name: 'text-inputs.editor',
    component: Editor
  }
];
