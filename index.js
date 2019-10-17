let io = require('socket.io')(process.env.PORT || 80)

console.log('server started')

io.on('connection', function(socket){
    console.log('connection made....');

    // a circular transmission
    socket.on('collect', function(data){
        console.log('getting data...');
        socket.emit('recive', data)
    })

    socket.on('disconnect', function(){
        console.log('connection broken...');
    })   
})
