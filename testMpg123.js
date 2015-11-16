var Mpg = require('mpg123');

var filename = '~/mp3/253.mp3';
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
}, 5000 );

setTimeout( function() {
    player.pause();
    console.log('play');
}, 10000 );

unction exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

setTimeout( function() {
    newPlayer.pause();
    console.log('pause');
}, 20000 );
