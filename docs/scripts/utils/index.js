export async function loadAsset(url) {
  try {
    const module = await import(`@/${url}`);
    return module.default;
  } catch (err) {
    console.warn(err.toString());
  }
}
