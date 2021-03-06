const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

io.on('connection', socket => {
    console.log('Kullanıcı bağlandı.');

    socket.on('message', data => {
        socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı çıkış yaptı.');
    });
})