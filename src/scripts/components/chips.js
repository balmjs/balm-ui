import multiBootstrap from '../config/multi-bootstrap';
import UiChipSet from './chips/chip-set';
import UiChip from './chips/chip';
import UiChipText from './chips/chip-text';
import UiChipLeadingIcon from './chips/chip-icon-leading';
import UiChipTrailingIcon from './chips/chip-icon-trailing';
import UiChipCheckmark from './chips/chip-checkmark';

const components = {
  UiChipSet,
  UiChip,
  UiChipText,
  UiChipLeadingIcon,
  UiChipTrailingIcon,
  UiChipCheckmark
};

multiBootstrap(components);

export default components;
export {
  UiChipSet,
  UiChip,
  UiChipText,
  UiChipLeadingIcon,
  UiChipTrailingIcon,
  UiChipCheckmark
};
