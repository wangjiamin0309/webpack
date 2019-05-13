import Vue from 'vue'
import App from './app.vue'
import './assets/style/text.css'
import './assets/style/styl.styl'
import './assets/images/1.png'

const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
	render:(h)=>h(App)
}).$mount(root)
