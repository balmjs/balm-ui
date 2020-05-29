export function getCode(type, item) {
  return item.code || (type === 'emoji' ? `:${item.name}:` : `[${item.name}]`);
}

export function getEmoji(type, item) {
  return type === 'emoji' ? item.value : item.src;
}
