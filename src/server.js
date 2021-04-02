import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV, DV_APP_NAME } = process.env;
const dev = NODE_ENV === 'development';

const url = dev ? '/' : DV_APP_NAME;
	
polka() // You can also use Express
	.use(
		url,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
