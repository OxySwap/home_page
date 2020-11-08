import Vue from 'vue';

import '@/tools/pc';
import App from './App';
import store from './store';
import * as navTo from '@/tools/navTo';
import { encryptWx, cutPhone,cutAddress, formatSrtTime,isEmpty,setPageTitle } from '@/tools';
import GbHeader from '@/components/common/glb/Header';
import GFooter from '@/components/common/glb/Footer';
import GBack from '@/components/common/glb/Back';
import GTitle from '@/components/common/glb/Title';
import GImage from '@/components/common/Image';
import oRow from '@/components/common/plugns/oveui-layout/o-row/o-row';
import oCol from '@/components/common/plugns/oveui-layout/o-col/o-col';
import initModal from "@/components/common/plugns/zhangxu-showModal/initModal.js";
import showModal from '@/components/common/plugns/zhangxu-showModal/show-modal';
initModal(Vue);
Vue.component('GbHeader', GbHeader);
Vue.component('GTitle', GTitle);
Vue.component('GFooter', GFooter);
Vue.component('GBack', GBack);
Vue.component('GImage', GImage);
Vue.component('o-row', oRow);
Vue.component('o-col', oCol);
Vue.component('show-modal',showModal);
uni.getSystemInfo({
	success: (res) => {
		var width = res.screenWidth;
		Vue.prototype.$isPc = !!(width > 768);
		Vue.prototype.$isMobile = !(width > 768);
	},
});
Vue.prototype.$navTo = navTo;
Vue.prototype.$setPageTitle = setPageTitle;
Vue.prototype.$stopRefresh = () => {
	setTimeout(() => {
		uni.stopPullDownRefresh();
	}, 1000);
};
Vue.prototype.$showToast = (title) => {
	uni.showToast({
		icon: 'none',
		title,
	});
};
Vue.prototype.$toAbsNumber = (number) => {
	number = parseFloat(number);
	return Math.abs(parseFloat(number).toFixed(2)) || 0;
};
Vue.prototype.$encryptWx = encryptWx;
Vue.prototype.$cutPhone = cutPhone;
Vue.prototype.$cutAddress = cutAddress;
Vue.prototype.$formatSrtTime = formatSrtTime;
Vue.prototype.$isEmpty = isEmpty;

Vue.config.productionTip = false;

Vue.prototype.$store = store;

App.mpType = 'app';

const app = new Vue({
	store,
	...App,
});
app.$mount();
