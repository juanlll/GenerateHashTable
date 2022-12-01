function generateHashForTable(key = '', i = '-') {
  return Buffer.from(new String(key).valueOf())
    .toString('base64')
    .replace(/(.{7})/g, '$1' + i)
    .trim();
}
