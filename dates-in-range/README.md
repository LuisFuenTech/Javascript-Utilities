# Dates In Range

This function allows you to enter a range of dates and generates an array with the dates within that range. The start and end dates are inclusive.

## Input

This function receives objects like:

```
{
  starDate: '2020-06-01',
  finalDate: '2020-06-09'
}
```

## Output

This function returns an array with fomat `YYYY-MM-DD` like:

```
[
  '2020-06-01',
  '2020-06-02',
  '2020-06-03',
  '2020-06-04',
  '2020-06-05',
  '2020-06-06',
  '2020-06-07',
  '2020-06-08',
  '2020-06-09'
]
```

Returns `Dates are invalids` when any date given is wrong.

### Dependencies
* [moment](https://momentjs.com/)
