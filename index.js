function generateHashForTable(key = '', i = '-') {
  return Buffer.from(new String(key).valueOf()).toString('base64').trim();
}
