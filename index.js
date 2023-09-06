const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');
const geoip = require('geoip-lite');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let flips = [];
let idCounter = 1;

app.get('/coinflip', (req, res) => {
    const result = Math.random() > 0.5 ? 'heads' : 'tails';
    const timestampStart = Date.now();
    const timestampEnd = timestampStart + 2000; // Adding 2 seconds for simulation
    const hash = crypto.createHash('sha256').update(result + timestampStart + timestampEnd).digest('hex');
    
    // Extract the user's IP address (excluding the IPv6 prefix if present)
    const ip = req.ip.replace(/^::ffff:/, '');
    const geo = geoip.lookup(ip); // Get geolocation data based on IP

    const flip = {
        id: idCounter++,
        result,
        timestampStart,
        timestampEnd,
        hash,
        userAgent: req.get('User-Agent'),
        ip: ip,
        geolocation: geo,
        protocol: req.protocol,
        method: req.method,
        originalUrl: req.originalUrl,
        secure: req.secure,
        encrypted: req.connection.encrypted ? true : false,
        referer: req.get('Referer'),
        acceptLanguage: req.get('Accept-Language'),
        origin: req.get('Origin')
    };

    flips.push(flip);
    fs.writeFileSync('./data.json', JSON.stringify(flips, null, 2)); // Pretty print JSON

    res.json({ result: flip.result, hash: flip.hash });
});

app.get('/verify/:hashid', (req, res) => {
    const flip = flips.find(f => f.hash === req.params.hashid);
    if (!flip) {
        return res.status(404).json({ error: 'Hash not found' });
    }
    res.json(flip);
});

app.listen(port, () => {
    console.log(`Coinflip server listening at http://localhost:${port}`);
});
