function parseStringDotObject(data) {
  const mainProcess = (object) => {
    const keys = Object.keys(object);
    let result = {};
    for (let i = 0; i < Object.keys(object).length; i++) {
      parseObject(result, keys[i].split('.'), object[keys[i]]);
    }
    function parseObject(parentObject, keysArray, value) {
      if (keysArray.length == 1) {
        parentObject[keysArray[0]] = value;
        return parentObject;
      } else {
        parentObject[keysArray[0]] = parentObject[keysArray[0]] || {};
        return parseObject(
          parentObject[keysArray[0]],
          keysArray.slice(1),
          value
        );
      }
    }
    return result;
  };

  if (data instanceof Array) return data.map((object) => mainProcess(object));

  if (data instanceof Object) return mainProcess(data);
}

module.exports = {
  parseStringDotObject
};
