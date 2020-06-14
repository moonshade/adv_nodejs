process.env.UV_THREADPOOL_SIZE = 1; // every child in the cluster only has 1 thread available
const cluster = require('cluster');

// is the file being executed in master node?
if (cluster.isMaster) {
    // cause index.js to be executed again 
    // but in child mode or slave mode
    cluster.fork();
} else {
    // I'm a child and I'm going to act like a server
    // and do nothing else
    const express = require('express');
    const app = express();
    const crypto = require('crypto');

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    });

    app.listen(3000);
}


