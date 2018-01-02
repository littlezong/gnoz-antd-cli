console.log(process.env.NODE_ENV);
module.exports = process.env.NODE_ENV === 'development' ?
	require('./build/webpack.dev') :
	require('./build/webpack.prod');