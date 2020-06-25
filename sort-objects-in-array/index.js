function sortObjectsFromArray(objects, key) {
  return objects
    .filter((item) => key in item)
    .sort((a, b) => {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;

      return 0;
    });
}

module.exports = {
  sortObjectsFromArray
};
