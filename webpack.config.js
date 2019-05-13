//Path  Node里面的基本包,处理路径
//__dirname文件所在目录得地址
const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//引入html插件
const HTMLPlugin=require('html-webpack-plugin')


const webpack=require('webpack')
//变量devServer
const isDev=process.env.NODE_ENV === 'development'

const config={
	target:'web',
	entry:path.join(__dirname,'src/index.js'),
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
				
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]				
			},
			{
				test:/\.(gif|jpg|jpeg|png|svg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'[name]-aaa.[ext]'
						}
					}
				]
			},
			{
				test:/\.styl/,
				use:[
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			}
		]
	},
	
	plugins:[
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:isDev?'"development"':'"production"'
			}
		}),
		new HTMLPlugin()
	]
}
if(isDev){
	//帮助我们在页面调试代码
	config.devtool='#cheap-module-eval-source-map'
	config.devServer={
		port:8000,
		host:'0.0.0.0',
		disableHostCheck:true,
		overlay:{
			errors:true
		},
		//hot不用重新刷新整个页面
		hot:true
		//open:true 开始自动打开浏览器
	}
	//	添加插件
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
	
}
module.exports=config