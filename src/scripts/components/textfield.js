import multiBootstrap from '../config/multi-bootstrap';
import UiTextfield from './input-controls/textfield';
import UiTextfieldHelptext from './input-controls/textfield-helptext';

const components = {
  UiTextfield,
  UiTextfieldHelptext
};

multiBootstrap(components);

export default components;
export { UiTextfield, UiTextfieldHelptext };
