module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/': '/',
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' },
            sockHost: 'http://127.0.0.1:8080',
            disableHostCheck: true,
            host: '127.0.0.1',
            port: 8080,
        }
    }
}
