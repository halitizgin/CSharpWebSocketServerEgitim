const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

io.on('connection', socket => {
    console.log('Kullanıcı bağlandı.');

    socket.on('login', data => {
        const user = JSON.parse(data);
        socket.broadcast.emit('login', user);
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı çıkış yaptı.');
    });
})