# Http Error 🌐❌
This class allows you to create an object to create custom and specific http-errors when handle server responses in your nodejs APIs.

## Error Object
Each http error from this module has:
* `date`: Date when the error where thrown
* `isHttpError`: Flag to indicate the error belongs to this module in order to handle it
* `message`: Custom message to send with the error
* `description`: A short description to resume what happened
* `name`: The default http error name

## Methods
* `badRequest`: Handles 400 http error
* `unauthorized`: Handles 401 http error
* `forbidden`: Handles 403 http error
* `notFound`: Handles 404 http error
* `conflict`: Handles 409 http error
* `internalServerError`: Handles 500 http error

## Usage
```
const HttpError = require('/path/to/module');

try {
    throw new HttpError().notFound('User not found');
}
catch(error) {
    if(error.isHttpError){
        const { statusCode, message } = error;
        return res.statusCode().send({ statusCode, message })
    }
}

```

## Example
Please [view example file](https://github.com/LuisFuenTech/Javascript-Utilities/blob/master/http-error-handler/example.js)