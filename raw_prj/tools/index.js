import store from '../store';
import { http } from '../js_sdk/luch-request/index.js';
import { hex_md5 } from './md5';
import { host, baichuanParam } from '../config';

/*
 * 对请求参数进行排序
 * */
const setHeaderParams = (params = {}) => {
	const nowTimestamp = Date.parse(new Date());
	let arr = [];
	for (let k in params) {
		arr.push({
			key: k,
			val: params[k],
		});
	}
	arr = arr.sort((a, b) => a.key.charCodeAt(0) - b.key.charCodeAt(0));
	const arrSort = {};
	for (let k in arr) {
		arrSort[arr[k].key] = arr[k].val;
	}
	return {
		nowTimestamp,
		arrSort,
	};
};

/*
 * 隐藏loading toast
 * */
const hideToastArr = [];
/*
 * axios 拦截器
 * */
http.interceptor.request(
	(config) => {
		if (!config.data) config.data = {};

		let showToast = true;
		for (let k in hideToastArr) {
			if (config.url.search(hideToastArr[k]) !== -1) {
				showToast = false;
			}
		}
		if (showToast && config.method == 'post') {
			uni.showLoading({
				title: 'loading',
			});
		}

		const loginState = getLoginState();
		if (loginState.token && loginState.token !== '') {
			config.header['token'] = `Bearer ` + loginState.token;
			config.data = {
				uid: loginState.uid,
				...config.data,
			};
		}

		// const headerPrams = setHeaderParams(config.data);

		// config.header['request-timestamp'] = headerPrams.nowTimestamp;
		// config.header['request-sign'] = hex_md5(
		// 	JSON.stringify(headerPrams.arrSort) + headerPrams.nowTimestamp + appKey
		// );

		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

http.interceptor.response(
	(response) => {
	
		if (!checkResponse(response)) {
			uni.showToast({
				icon: 'none',
				title: response.data.msg,
			});
			if (response.data.code === 20003 || response.data.code === 20004) {
				logout();
				setTimeout(() => {
					uni.redirectTo({
						url: '/views/Login/Login',
					});
				}, 1500);
			}
			return Promise.reject(response);
		}
		return response;
	},
	function() {}
);

/*
 * 登出动作
 * */

const checkResponse = (response) => {
	if (!response || !response.data || response.data.code === undefined || response.data.code !== 0) {
		return false;
	}
	return true;
};

const login = (r) => {
	console.log(r);
	const { token, uid, mobile } = r;
	store.commit('setState', {
		token,
		uid,
		mobile,
	});
	uni.setStorageSync('token', token);
	uni.setStorageSync('uid', uid);
	uni.setStorageSync('mobile', mobile);
};

const logout = () => {
	store.commit('setState', {
		token: '',
		uid: '',
		mobile: '',
	});
	uni.clearStorage();
};

const getLoginState = () => {
	const token = uni.getStorageSync('token');
	const uid = uni.getStorageSync('uid');
	const mobile = uni.getStorageSync('mobile');
	return {
		token,
		uid,
		mobile,
	};
};

const isLogin = () => {
	const loginState = getLoginState();
	return loginState.token && loginState.token !== '';
};

/*
 * 根据时间戳获得时间格式，时间转换
 * */
const fmtDate = (timestamp = Date.parse(new Date()), type = 1) => {
	let date = new Date(timestamp);
	let y = 1900 + date.getYear();
	let m = '0' + (date.getMonth() + 1);
	let d = '0' + date.getDate();
	let h = '0' + date.getHours();
	let i = '0' + date.getMinutes();
	let s = '0' + date.getSeconds();
	let rs;
	switch (type) {
		case 1:
			rs =
				y +
				'-' +
				m.substring(m.length - 2, m.length) +
				'-' +
				d.substring(d.length - 2, d.length) +
				' ' +
				h.substring(h.length - 2, h.length) +
				':' +
				i.substring(i.length - 2, i.length) +
				':' +
				s.substring(s.length - 2, s.length);
			break;
		case 2:
			rs = y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length);
			break;
		default:
			rs =
				y +
				'-' +
				m.substring(m.length - 2, m.length) +
				'-' +
				d.substring(d.length - 2, d.length) +
				' ' +
				h.substring(h.length - 2, h.length) +
				':' +
				i.substring(i.length - 2, i.length) +
				':' +
				s.substring(s.length - 2, s.length);
			break;
	}
	return rs;
};



const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
};

const cutPhone = (phone) => {
	if (phone) {
		return phone.substr(0, 3) + '****' + phone.substr(7, 11);
	}
};
const cutAddress = (address) => {
	if (address) {
		return address.substr(0, 4) + '****' + address.substr(-4);
	}
};

const isiOS = () => {
	const u = navigator.userAgent;
	// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
};

/*
 * dcloud 环境，保存一个base64图片
 * @params base64 base64编码
 * @params callback 保存成功的回调(target: 保存后的图片url路径，以"file://"开头; size: 保存后图片的大小，单位为字节（Byte）; width: 保存后图片的实际宽度，单位为px; height:  保存后图片的实际高度，单位为px)
 * */
const SaveImage = (base64, callback) => {
	if (!(navigator.userAgent.indexOf('Html5Plus') > -1)) {
		callback.onFail('没有环境, SaveImage 保存图片接口调用失败');
		return;
	}
	let fileName = new Date().getTime();
	let bitmap = new plus.nativeObj.Bitmap();

	// 从本地加载Bitmap图片
	bitmap.loadBase64Data(
		base64,
		function() {
			console.log('加载图片成功');
			//bitmap.save("_doc/shareImage/" + (new Date()).getTime() + ".jpg", {
			bitmap.save(
				'_documents/shareImage/share912_' + fileName + '.jpg',
				{
					overwrite: true,
					quality: 100,
				},
				function(i) {
					console.log('保存图片成功：', i);
					//保存相册
					plus.gallery.save(
						'_documents/shareImage/share912_' + fileName + '.jpg',
						function() {
							console.log('分享图片保存相册成功');
						},
						function() {
							console.log('分享图片保存相册失败');
						}
					);

					bitmap.clear();

					if (callback.onScuess) {
						callback.onScuess(i);
					}
				},
				function(e) {
					console.log('保存图片失败：', e);
					if (callback.onFail) {
						callback.onFail(e);
					}
				}
			);
		},
		function(e) {
			console.log('加载图片失败：', e);
			if (callback.onFail) {
				callback.onFail(e);
			}
		}
	);
};

/*
 * 倒计时用，还剩几天几十几分几秒
 * @param endTime timestamp 结束的时间戳
 */
function getEndTime(endTime) {
	//获取当前时间
	let now = Date.parse(new Date());
	//设置截止时间
	let end = endTime;
	//时间差
	let leftTime = end - now;
	//定义变量 d,h,m,s保存倒计时的时间
	let d, h, m, s;
	if (leftTime >= 0) {
		return {
			d: Math.floor(leftTime / 1000 / 60 / 60 / 24),
			h: Math.floor((leftTime / 1000 / 60 / 60) % 24),
			m: Math.floor((leftTime / 1000 / 60) % 60),
			s: Math.floor((leftTime / 1000) % 60),
		};
	}
	return {
		d: 0,
		h: 0,
		m: 0,
		s: 0,
	};
}
const convertObj = (data) => {
	var _result = [];
	for (var key in data) {
		var value = data[key];
		if (value.constructor == Array) {
			value.forEach(function(_value) {
				_result.push(key + '=' + _value);
			});
		} else {
			_result.push(key + '=' + value);
		}
	}
	return _result.join('&');
};

const fnTime = function(time) {
	var timeDate = new Date(time);
	let ptime = timeDate.getTime();

	const twentyFourHours = 24 * 60 * 60 * 1000;
	const fortyEightHours = 24 * 60 * 60 * 1000 * 2;
	const date = new Date();
	const year = date.getFullYear();

	const month = date.getMonth() + 1;
	const day = date.getDate();
	const today = `${year}-${month}-${day}`;
	const todayTime = new Date(today).getTime();
	const yesterdayTime = new Date(todayTime - twentyFourHours).getTime();
	const lastYesterdayTime = new Date(todayTime - fortyEightHours).getTime();

	if (ptime >= todayTime) {
		return 'today';
	} else if (ptime < todayTime && yesterdayTime <= ptime) {
		return 'yesterday';
	} else if (ptime < yesterdayTime && lastYesterdayTime <= ptime) {
		return 'lastYesterday';
	} else {
		return 'other';
	}
};
const formatSrtTime = (time) => {
	var fTime = new Date(time.replace(/-/g, '/'));
	var sTime = time.substr(0, 10).split('-');
	var ymdTime = '';
	var nowYear = new Date().getFullYear();
	var timeYear = fTime.getFullYear();
	sTime.forEach((el, i) => {
		var str = i === 0 ? '年' : i === 1 ? '月' : '日';
		ymdTime += el + str;
	});
	var hsTime = time.substr(11, 5);
	var initStrTime = ymdTime + hsTime;
	var filterTime = fnTime(time);
	if (nowYear !== timeYear) {
		return initStrTime;
	} else {
		if (filterTime === 'today') {
			return '今天' + hsTime;
		} else if (filterTime === 'yesterday') {
			return '昨天' + hsTime;
		} else if (filterTime === 'lastYesterday') {
			return '前天' + hsTime;
		} else {
			return initStrTime.substr(5);
		}
	}
};
const getTimeNumber = function(str_time) {
	var date = new Date();
	var now = date.getTime();
	var end_date = new Date(str_time.replace(/-/g, '/'));
	var end = end_date.getTime();

	var left_time = end - now;
	return left_time;
};
const encryptWx = (str) => {
	if (!str) return '';
	return str.replace(/(\w{2})\w*(\w{2})/, '$1******$2');
};

const isEmpty = (val) => {
	return val!==undefined&&val!==null&&val!==''?val:'-'
};
const setPageTitle = (val) => {
	document.title=val
};

export {
	login,
	logout,
	fmtDate,
	getRandomInt,
	cutPhone,
	cutAddress,
	isiOS,
	SaveImage,
	checkResponse,
	
	http,
	getEndTime,
	convertObj,
	formatSrtTime,
	getTimeNumber,
	hex_md5,
	isLogin,
	getLoginState,
	encryptWx,
	isEmpty,
	setPageTitle
};
