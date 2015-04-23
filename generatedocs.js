'use strict';

var fs = require('fs');

var packageJson = require('./package.json');

var contents = [
  '<p>'+packageJson.name+'</p>',
  '<p>'+packageJson.description+'</p>',
  '<p>'+packageJson.version+'</p>',
  ''
].join('\n');

fs.writeFileSync('documentation/index.html', contents);
