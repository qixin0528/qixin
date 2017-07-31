// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import store from './_vuex/store'
//console.log(store.state.count)
//设置为false以阻止vue在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在任意组件里都能得到this.$route
  store,//在任意组件里都能得到this.$store
  template: '<App/>',
  components: { App }
})
