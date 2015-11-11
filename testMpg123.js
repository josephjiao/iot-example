var Mpg = require('mpg123');

var filename = '/tmp/mp3/253.mp3';
var player = new Mpg().loadpaused(filename);
console.log('test');

player.pause();

