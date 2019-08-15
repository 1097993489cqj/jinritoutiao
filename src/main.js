import Vue from 'vue'
import App from './App.vue'

import ElEMNT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElEMNT)
Vue.config.productionTip = false

// 职责1 导入项目依赖的资源 (包 css ...)
// 职责2. 初始化根实例 new Vue() 选项中的render 作用是把某一个A组件渲染在你指定的容器内(.$mout('#app))内
new Vue({
  render: h => h(App)
}).$mount('#app')
