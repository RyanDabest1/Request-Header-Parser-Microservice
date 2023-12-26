const express = require('express')
const IP = require('ip');

const app = express();

app.get('/whoami', (req,res) => {
    const ipAddress = IP.address();
    res.json(
        {
    ipaddress : ipAddress,
    language : req.headers["accept-language"],
    software : req.header('user-agent')
}
    );
})

app.listen(4000, () => {console.log("Server listening on port 4000")})