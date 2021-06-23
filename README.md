
## Installation
```
npm install iploka.node --save
```

## Usage 
```
var ipLoka = require('iploka.node');

var callback = function(res){
    console.log(res);
};

ipLoka.location(callback, 'ip', 'secret-key')  // Complete location for your IP address

API key can be specified in the following ways : 

1. Inside `iploka.js` by initializing the value of `API_KEY` variable
2. As a function argument e.g. `iploka.location(callback, '8.8.8.8', 'secret-key')`

```
## Get your free API Key at https://iploka.com

