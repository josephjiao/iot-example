var Mpg = require('mpg123');

var filename = '/tmp/mp3/253.mp3';
var player = new Mpg().play(filename);

console.log('test');
player.on('error',function(){
    console.log('onError');
});

player.on('pause',function(){
    console.log('onPause');
});
player.on('resume',function(){
    console.log('onResume');
});

setTimeout( function() {
    player = player.pause();
    console.log('pause');
}, 10000 );

setTimeout( function() {
    player.pause();
    console.log('play');
}, 15000 );
//
//setTimeout( function() {
//    newPlayer.pause();
//    console.log('pause');
//}, 20000 );
