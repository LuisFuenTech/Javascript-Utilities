function groupByKey(data, key) {
  return data.reduce((store, object) => {
    const value = object[key];

    if (!store[value]) {
      store[value] = [object];
    } else {
      store[value].push(object);
    }
    return store;
  }, {});
}

const places = [
  {
    city: "cartagena",
    name: "Los Alpes",
  },
  {
    city: "medellin",
    name: "Las flores",
  },
  {
    city: "cartagena",
    name: "el centro",
  },
  {
    city: "cali",
    name: "parque azucar",
  },
  {
    city: "cali",
    name: "parque los santos",
  },
];

groupByKey(places, "city");
