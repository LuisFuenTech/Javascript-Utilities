# String Dotted to Nested Object

This function allows you to parse objects whose attributes are strings with points, and converts them into nested objects.

## Input
This function can receives a **single object** or an **array of objects** like:

```
{
  'person.name': 'Luis',
  'person.age': 74,
  'person.address.city': 'Atlanta',
  'person.address.street.name': 'St. Joseph',
  'person.address.street.number': '#34-46',
  'person.position': 'Software Engineer',
  'social.instagram': '@luisfuentech',
  'social.twitter': 'luisfuentech',
  'social.github': 'luisfuentech'
}
```
or

```
[ 
  {
    'person.name': 'Luis',
    'person.age': 74,
    'person.address.city': 'Atlanta',
    'person.address.street.name': 'St. Joseph',
    'person.address.street.number': '#34-46',
    'person.position': 'Software Engineer',
    'social.instagram': '@luisfuentech',
    'social.twitter': 'luisfuentech',
    'social.github': 'luisfuentech'
  }
]
```

## Output
This function returns the object like:

When an **object** is passed, returns an **object**:
```
{
  person: {
    name: 'Luis',
    age: 74,
    address: {
      city: 'Atlanta',
      street: {
        name: 'St. Joseph',
        number: '#34-46'
      }
    },
    position: 'Software Engineer'
  },
  social: {
    instagram: '@luisfuentech',
    twitter: 'luisfuentech',
    github: 'luisfuentech'
  }
}
```

When an **array** is passed, returns an **array**:
```
[
  {
    person: {
      name: 'Luis',
      age: 74,
      address: {
        city: 'Atlanta',
        street: {
          name: 'St. Joseph',
          number: '#34-46'
        }
      },
      position: 'Software Engineer'
    },
    social: {
      instagram: '@luisfuentech',
      twitter: 'luisfuentech',
      github: 'luisfuentech'
    }
  }
]
```
