const fs = require('fs');

const proxyDomain = process.env.PROXY_DOMAIN || 'http://default-proxy.com';

const packageJson = require('./package.json');

// Update the proxy field in package.json
packageJson.proxy = proxyDomain;

// Write the changes back to package.json
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

console.log(`Proxy set to ${proxyDomain}`);