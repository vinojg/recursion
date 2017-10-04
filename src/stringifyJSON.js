// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arrayToString = [];
  var keyValueToString = [];

  if (typeof obj === 'number') {
  	return '' + obj;
  } else if (obj === null) {
  	return '' + null;
  } else if (typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	  if (obj.length === 0) {
  	  	return '[]';
  	  } else {
  	  	obj.forEach( function(item) {
  	  		arrayToString.push(stringifyJSON(item));
  	  	});
  	  	return '[' + arrayToString + ']';
  	  }
  } else if (typeof obj === 'object') {
  	if (Object.keys(obj).length === 0) {
  		return '{}';
  	} else {
  		var keys=Object.keys(obj);
  		keys.forEach( function(item) {
  			var key = '"' + item + '":';
  			var value = obj[item];
  			if (typeof value === 'string') {
  				keyValueToString.push(key + '"' + value + '"');
  			} else if (typeof value === 'boolean') {
  				keyValueToString.push(key + value);
  			} else if (value === null) {
  				keyValueToString.push(key + null);
  			} else if (typeof obj === 'number') {
  				keyValueToString.push(key + value);
  			} else if (typeof value === 'object') {
  				keyValueToString.push(key + stringifyJSON(value));
  			}
  		});
  		return '{' + keyValueToString + '}';
  	}
  }
};