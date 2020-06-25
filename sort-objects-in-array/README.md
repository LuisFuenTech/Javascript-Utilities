# Sort Objects In Array

This function allows you to enter an array of objects and returns an sorted array based in the key given.

## Input

This function receives an array of objects and a key, example:

```
const products = [
  { name: 'book', price: 7500, id: 7 },
  { name: 'glu', price: 500, id: 2 },
  { name: 'car', price: 2400, id: 3 },
  { name: 'pant', price: 5000, id: 1 },
  { name: 'glass', price: 2400, id: 5 },
  { name: 'pen', price: 6000, id: 9 },
  { name: 'paper', price: 1500, id: 4 }
];

sortObjectsFromArray(products, 'price');
```

## Output

This function returns an sorted array based on the ke given, example:

Sorted by `price`
```
[
  { name: 'glu', price: 500, id: 2 },
  { name: 'paper', price: 1500, id: 4 },
  { name: 'car', price: 2400, id: 3 },
  { name: 'glass', price: 2400, id: 5 },
  { name: 'pant', price: 5000, id: 1 },
  { name: 'pen', price: 6000, id: 9 },
  { name: 'book', price: 7500, id: 7 }
]
```
Sorted by `name`
```
[
  { name: 'book', price: 7500, id: 7 },
  { name: 'car', price: 2400, id: 3 },
  { name: 'glass', price: 2400, id: 5 },
  { name: 'glu', price: 500, id: 2 },
  { name: 'pant', price: 5000, id: 1 },
  { name: 'paper', price: 1500, id: 4 },
  { name: 'pen', price: 6000, id: 9 }
]
```

Returns empty array when any key given is not in objects.
