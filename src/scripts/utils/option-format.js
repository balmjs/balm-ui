export const optionFormatDefaultValue = {
  label: 'label',
  value: 'value'
};

export const checkOptionFormat = (componentName, format) => {
  if (!(format.label && format.value)) {
    console.error(
      `[${componentName}]: Invalid option format ({ label: string; value: string })`
    );
  }
};
