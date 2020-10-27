# Group Objects By Attribute 

This function allows you to group different objects that share a common attribute in their structure. The object structure returned is _key/array_.

## Input
This function can receives an **array of objects** like:

```
const places = [
    {
      city: 'cartagena',
      name: 'Los Alpes'
    },
    {
      city: 'medellin',
      name: 'Las flores'
    },
    {
      city: 'cartagena',
      name: 'el centro'
    },
    {
      city: 'cali',
      name: 'parque azucar'
    },
    {
      city: 'cali',
      name: 'parque los santos'
    }
  ]

groupByKey(places, 'city');
```

## Output
This function returns an object like (when is grouped by _city_):

```
{
  cartagena: [
    { city: "cartagena", name: "Los Alpes" },
    { city: "cartagena", name: "el centro" },
  ],
  medellin: [{ city: "medellin", name: "Las flores" }],
  cali: [
    { city: "cali", name: "parque azucar" },
    { city: "cali", name: "parque los santos" },
  ],
}
```
