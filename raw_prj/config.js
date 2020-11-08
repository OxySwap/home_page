const debug = false;
let host = 'https://ifs.incre.finance/';

if (debug) {
	host = 'http://121.40.204.252:4000/mock/85/';
}


const webUrl='https://tearn.incre.finance/#/'
// 百川参数
let baichuanParam = {
	mmpid: 'mm_1043930074_1532700300_110435450200',
	isvcode: 'app',
	opentype: 'native',
	adzoneid: '110435450200',
	tkkey: '29337646',
};




export { host,  baichuanParam, webUrl };
