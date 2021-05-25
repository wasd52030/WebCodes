module.exports = {
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,
        hotOnly: false,
        proxy: {
            '/Back': {
                target: 'http://localhost/SQLDemo/Back/', //API服务器的地址
                ws: true,  //代理websockets
                changeOrigin: true, 
                pathRewrite: {   //路徑取代 比如'/api/aaa/ccc'取代為'/aaa/ccc'
                    '^/Back': ''
                }
            }
        },
    }
}