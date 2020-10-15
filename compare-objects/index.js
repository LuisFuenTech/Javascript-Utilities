function isObject(object) {
  return object != null && typeof object === 'object';
}

function deepComparing(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    const object1Value = object1[key];
    const object2Value = object2[key];

    const areObjects = isObject(object1Value) && isObject(object2Value);

    if (
      (!areObjects && object1Value !== object2Value) ||
      (areObjects && !deepComparing(object1Value, object2Value))
    ) {
      return false;
    }
  }

  return true;
}

function compareObjects(...objects) {
  for (let i = 0; i < objects.length - 1; i++) {
    const currentObject = objects[i];
    const nextObject = objects[i + 1];

    const areTheSame = deepComparing(currentObject, nextObject);

    if (!areTheSame) return false;
  }

  return true;
}

module.exports = {
  compareObjects,
};
