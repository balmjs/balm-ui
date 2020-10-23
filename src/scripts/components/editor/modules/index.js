import useCounter from './counter';
// import usePreview from './preview';

function useDefaultModules(Quill) {
  useCounter(Quill);
  // usePreview(Quill, options);
}

export default useDefaultModules;
