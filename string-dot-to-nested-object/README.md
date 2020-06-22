# String Dotted to Nested Object

## Input
This function receives objects like:

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

## Output
This function returns the object like:

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
    twitter: 'luisfuentech'
    github: 'luisfuentech'
  }
}
```