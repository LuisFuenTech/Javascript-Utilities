# Compare Objects

This function allows you to enter n objects and returns a boolean indicating if they are equal.

## Input

This function receives as many objects as you need, example:

```
const object1 = {
  "token": "db7409-1602623140087",
  "found": true,
  "licenseInfo": {
    "newLicenseInfo": {
      "status": "CURRENT",
      "expirationDate": "2021-08-31T05:00:00.000Z",
      "originalIssue": "2016-07-05T05:00:00.000Z",
      "licenseNumber": "86038698",
      "disciplinaryAction": null,
      "firstName": "NANCY",
      "middleName": "GAMBOA",
      "lastName": "AHL"
    },
    "oldLicenseInfo": {
      "id": 14140885,
      "stateId": 56,
      "state": {
        "code": "CERT"
      }
    }
  },
  "type": "EMPLOYEE",
  "metadata": {}
};


const object2 = {
  "token": "db7409-1602623140087",
  "found": true,
  "licenseInfo": {
        "oldLicenseInfo": {
      "id": 14140885,
      "stateId": 56,
      "state": {
        "code": "CERT"
      }
    },
    "newLicenseInfo": {
      "status": "CURRENT",
      "expirationDate": "2021-08-31T05:00:00.000Z",
      "originalIssue": "2016-07-05T05:00:00.000Z",
      "licenseNumber": "86038698",
      "disciplinaryAction": null,
      "firstName": "NANCY",
      "middleName": "GAMBOA",
      "lastName": "AHL"
    }
  },
  "type": "EMPLOYEE",
  "metadata": {}
};

const object3 = {
  "metadata": {},
  "licenseInfo": {
        "oldLicenseInfo": {
      "id": 14140885,
      "stateId": 56,
      "state": {
        "code": "CERT"
      }
    },
    "newLicenseInfo": {
      "status": "CURRENT",
      "expirationDate": "2021-08-31T05:00:00.000Z",
      "originalIssue": "2016-07-05T05:00:00.000Z",
      "licenseNumber": "86038698",
      "disciplinaryAction": null,
      "firstName": "NANCY",
      "middleName": "GAMBOA",
      "lastName": "AHL"
    }
  },
  "type": "EMPLOYEE",
   "token": "db7409-1602623140087",
  "found": true,
};



compareObjects(object1, object2, object3);
```

## Output

This function returns a boolean indicating if the objects are equal.

Are equal:

```
true
```

Are Not equal:

```
false
```
