export const optionFormatDefaultValue = {
  label: 'label',
  value: 'value'
};

export const checkOptionFormat = (component, format) => {
  if (!(format.label && format.value)) {
    console.error(
      `${component}: Invalid option format ({ label: string; value: string })`
    );
  }
};
