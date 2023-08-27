const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const username = os.userInfo().username;
    const osType = os.type();
    const uptimeMinutes = Math.floor(os.uptime() / 60);
    const currentDir = process.cwd();
    const serverFilename = path.basename(__filename);

    const htmlResponse = `
        <html>
        <head>
            <title>System Information</title>
        </head>
        <body>
            <h1>System Information</h1>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Operating System:</strong> ${osType}</p>
            <p><strong>Uptime (minutes):</strong> ${uptimeMinutes}</p>
            <p><strong>Current Directory:</strong> ${currentDir}</p>
            <p><strong>Server Filename:</strong> ${serverFilename}</p>
        </body>
        </html>
    `;

    res.end(htmlResponse);
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
