# iploka

Get geolocation information from any IP addresses. Get free API Key from https://iploka.com for free-forever 10,000 monthly requests.

`iploka` was developed by (Howuku)[https://howuku.com]. Howuku is an all-in-one CRO & analytics tool to help you optimize conversion rates and user experience.

[![NPM Version](https://img.shields.io/npm/v/geo-from-ip.svg)](https://www.npmjs.com/package/iploka) [![NPM Download](https://img.shields.io/npm/dm/iploka.svg)](https://www.npmjs.com/package/iploka)

## Features

- Free up to 10,000 monthly request
- Support both IPv4 and IPv6
- Additional timezone, currency and connection information

## Installation

- Include package in your project

```sh
npm install --save iploka
# or, if you are using yarn
yarn add --save iploka
```

## How to use

```javascript
const Iploka = require('iploka');

let iploka = new Iploka('YOUR_API_KEY')

// lookup ip address of the specified ip
iploka.lookup('134.201.250.155', (err, result) => {
  if (err) console.error(err);
  console.log(result);
})

// Get geolocation of requestor
iploka.check((err, result) => {
  if (err) console.error(err);
  console.log(result);
})
```

- And the complete response will be returned

```json
{
  "ip": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "latitude": 34.003,
  "longitude": -118.4298,
  "location": {
    "geoname_id": 4135386,
    "capital": "Washington",
    "languages": [
      {
        "code": "en-US",
        "name": "English"
      }
    ],
    "country_flag": "https://flagpedia.net/data/flags/h80/us.png",
    "country_flag_emoji": "🇺🇸",
    "country_flag_emoji_unicode": "U+1F1FA U+1F1F8",
    "calling_code": "1",
    "is_eu": false
  },
  "time_zone": {
    "id": "America/Los_Angeles",
    "current_time": "2021-06-23T22:27:10-07:00",
    "gmt_offset": -25200,
    "code": "-07",
    "is_daylight_saving": true
  },
  "currency": {
    "code": "USD",
    "name": "Us Dollar",
    "plural": "Us Dollars",
    "symbol": "$",
    "symbol_native": "$"
  },
  "connection": {
    "asn": 30722,
    "isp": "Vodafone Italia S.p.A."
  }
}
```

## Example Promise

```javascript
const Iploka = require('iploka');

let iploka = new Iploka('YOUR_API_KEY')

function handleResponse (res) {
  console.log(res)
}

function handleError (err) {
  console.error(err)
}

// 1. Standard IP Lookup
iploka.lookup('134.201.250.155')
  .then(handleResponse)
  .catch(handleError);

// 2. Check Requester IP
iploka.check()
  .then(handleResponse)
  .catch(handleError);
```

### Support

Email: hello@iploka.com
