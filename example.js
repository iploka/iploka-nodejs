const Iploka = require('iploka');

let iploka = new Iploka('YOUR_API_KEY')

// Handle response with promise

// 1. Standard IP Lookup
iploka.lookup('8.8.8.8', (err, result) => {
  if (err) console.error(err);
  console.log(result);
})

// 2. Check Requester IP
iploka.check((err, result) => {
  if (err) console.error(err);
  console.log(result);
})

// Handle response with callback

function handleResponse (res) {
  console.log(res)
}

function handleError (err) {
  console.error(err)
}

// 1. Standard IP Lookup
iploka.lookup('8.8.8.8')
.then(handleResponse)
.catch(handleError);

// 2. Check Requester IP
iploka.check()
.then(handleResponse)
.catch(handleError);

