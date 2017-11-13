# 下载相关依赖
    npm install --save vue-router vuex
    npm install --save fastclick
    npm install --save better-scroll
    npm install --save swiper@3.4
    npm install --save-dev node-sass sass-loader

# 配置开发环境的代理接口: config/index.js
    // 需要进行代理的路径
    const paths = [
      '/shopping',
      '/ugc',
      '/v1',
      '/v2',
      '/v3',
      '/v4',
      '/bos',
      '/member',
      '/promotion',
      '/eus',
      '/payapi'
    ]
    // proxy 配置选项
    const proxyOption = {
      target: 'http://cangdu.org:8001',
      changeOrigin: true,
    }
    // 包含所有代理的配置对象
    const proxyTable = {}
    paths.forEach(path => {
      proxyTable[path] = proxyOption
    })

# 适配移动端: index.html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <meta name="screen-orientation" content="portrait"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">

# 创建src下的目录结构
    api
    common
        images
        style
        utils
    components
    pages
    router
    store
    
# 