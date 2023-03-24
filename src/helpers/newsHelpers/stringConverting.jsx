export function stringMax(text, length) {
  if (text.length > length) {
    let newText = text.substring(0, length);
    return newText.substring(
      0,
      Math.max(newText.lastIndexOf(' '), newText.lastIndexOf(',') - 1)
    );
  } else {
    return text;
  }
}
