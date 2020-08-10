# Convert CSV to JSON

This function allows you to read a csv file and converts it to json, also can write json file as output.

## csvToJson function

This function receives the name of the csv file
and returns a JSON array:

```
await csvToJson(csvFileName);
```

## csvToJsonFile

This function receives the name of the csv file
and the name of the output file. This write a JSON file with the name of the output:

```
csvToJsonFile(csvFileName, outputFileName);
```

