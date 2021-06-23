
'use strict';

var https = require('https');

var API_KEY = '';

var headers   = {'user-agent': 'iploka/iploka-nodejs'};

var _request = function(path, callback, isJson){
    var options = {
        host: 'api.iploka.com',
        path: path,
        headers: headers
    };

    var req = https.get(options, function(resp){
        var body = ''

        resp.on('data', function(data){
            body += data;
        });

        resp.on('end', function(){
            if (isJson) {
                var loc = JSON.parse(body);            
                callback(loc);
            } else {
                var loc = body;
                callback(loc);
            }
        });
    });

    req.on('error', function(e) {
      callback(new Error(e));
    });
};

var location = function(callback, ip, key){
    var path;

    if (typeof callback !== 'function') {
        return 'Callback function is required';
    }

    if ((typeof key !== 'undefined') && (key !== '')){
        path = '/' + ip + '?api_key='+ key;
    } else {
        if (API_KEY !== ''){
            path = '/' + ip + '?api_key='+ API_KEY;
        } 
    }
    _request(path, callback, (!isField))
};


/**
 * Query location for an IP address
 */
module.exports = {
    location : location,
};
