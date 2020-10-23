function useDirection(Quill) {
  const DirectionStyle = Quill.import('attributors/style/direction');

  Quill.register(DirectionStyle, true);
}

export default useDirection;
