'use strict';

var fs = require('fs');

var packageJson = require('./package.json');

var contents = [
  '<p>'+packageJson.name+'</p>',
  '<p>'+packageJson.description+'</p>',
  '<p>v'+packageJson.version+'</p>',
  '<p>'+getDateRoundHour()+'</p>',
  ''
].join('\n');

fs.writeFileSync('documentation/index.html', contents);

function getDateRoundHour() {
  var date = (new Date())
    .toISOString()
    .slice(0, 13)
    .replace( 'T' , ':' )
    ;
  return date+':00';
}
