import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';
import { readFileSync } from 'fs';

import { createServer } from 'https';
const { PORT, NODE_ENV, DV_APP_NAME, DV_CERT_PATH, DV_CERT_KEY_PATH } = process.env;
const dev = NODE_ENV === 'development';

const url = DV_APP_NAME;
	
const {handler} = polka() // You can also use Express
	.use(
		url,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

const options = {
		key: readFileSync(DV_CERT_KEY_PATH),
		cert: readFileSync(DV_CERT_PATH)
	}

// Mount Polka to HTTPS server
const sslPort = 443
createServer(options, handler).listen(sslPort, _ => {
    console.log(`> Running on https://localhost:${sslPort}`);
});