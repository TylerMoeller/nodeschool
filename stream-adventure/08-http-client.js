var request = require('request'),
    r = request.post('http://localhost:8099');

process.stdin.pipe(r).pipe(process.stdout);
