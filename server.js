const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3303;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit(message);
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});