import Vue from 'vue';
import App from './App.vue'

import oRow from '@/components/common/plugns/oveui-layout/o-row/o-row'
import oCol from '@/components/common/plugns/oveui-layout/o-col/o-col'
import GImage from '@/components/common/Image'
Vue.component('o-row', oRow)
Vue.component('o-col', oCol)
Vue.component('GImage', GImage)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
  }).$mount('#app')
