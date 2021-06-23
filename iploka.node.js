'use strict';

const https = require('https');

module.exports = class {
  constructor(key) {
    this.apikey = key
    this.headers = {'user-agent': 'iploka/iploka-nodejs'};
  }

  httpReq (path) {
    return new Promise((resolve) => {
      var options = {
        host: 'api.iploka.com',
        path: path,
        headers: this.headers
      };

      var req = https.get(options, function(resp){
        var body = ''

        resp.on('data', function(data){
          body += data;
        });

        resp.on('end', function(){
          var loc = body;
          resolve(loc);
        });
      });

      req.on('error', function(e) {
        resolve(new Error(e));
      });
    })
  }

  lookup (ip, callback) {
    return new Promise((resolve, reject) => {
      let path = '/' + ip + '?api_key=' + this.apikey;
      this.httpReq(path)
      .then(result => {
        if (typeof callback === 'function') callback(null, result)
        resolve(result)
      })
      .catch(err => {
        if (typeof callback === 'function') callback(err, null)
        reject(err)
      })
    })
  }

  check (callback) {
    return new Promise((resolve, reject) => {
      var path = '/check?api_key=' + this.apikey;
      this.httpReq(path)
      .then(result => {
        if (typeof callback === 'function') callback(null, result)
        resolve(result)
      })
      .catch(err => {
        if (typeof callback === 'function') callback(err, null)
        reject(err)
      })
    })
  }
}
