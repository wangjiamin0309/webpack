# webpack
http://note.youdao.com/noteshare?id=bb1e1068dc9945d9410932c2d32dcd10&sub=C3D9B5C48F6847E2823AD679FEC65EA2
1 npm init 就有package.json
2安装npm i webpack vue vue-loader css-loader vue-template-compiler
3创建src文件夹
app.vue

index.js    vue挂载

4创建webpack.config.js

意思是用当前的webpack打包

5npm run build
配置静态资源安装css，url

npm i style-loader url-loader file-loader
然后可以在index.js引入css，img，打包可以看
配置css预处理器less
 npm i stylus-loader stylus
创建 stylus.styl文件

然后可以在index.js引入css打包可以看
配置webpack-dev-server
npm i webpack-dev-server

在全局添加target，编译目标是web平台

根据不同环境，进行判断，设置环境变量（开发还是正式）安装cross-env
npm i cross-env
不同环境下变量不一样安装了，可以在不同平台执行同一脚本





需要个html来引入，安装插件
npm i html-webpack-plugin

process.env打包不同得原代码

注意此处，要引入webpack
在webpack.config.js重
const webpack=require('webpack')

可以使用npm run dev
添加点配置
