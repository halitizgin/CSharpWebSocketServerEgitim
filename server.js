const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

io.on('connection', socket => {
    console.log('Kullanıcı bağlandı.');

    socket.emit('hi');

    socket.on('thanks', () => {
        console.log('Hoşbulduk.');
    });

    socket.on('click', () => {
        console.log("Tıklandı!");
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı çıkış yaptı.');
    });
})