import Vue from 'vue'
import App from './App'
import SldsComponents from './components/slds'

Vue.use(SldsComponents)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
})
