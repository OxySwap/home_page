

let validate = {
	isEmpty(value) {
		return value == '';
	},
	isNumber(value) {
		return /^[0-9]+$/.test(value);
	},
	isFloat(value) {
		return /^[0-9\.]+$/.test(value);
	},
	isPositiveFloat(val) {
		let floatReg = /^\d+(\.\d{0,2})?$/;
		// /^\d+(\.\d{2})?$/
		if (!floatReg.test(val) || parseFloat(val).toFixed(2) < 0.0) {
			return false;
		}
		return true;
	},
	isIdCard(val) {
		let reg =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		if (!reg.test(val)) {
			return false;
		}
		return true;
	},
	isEmail(value) {
		return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value);
	},
	isIp(value) {
		return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/.test(
			value
		);
	},
	isFax(value) {
		return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value);
	},
	isPhone(value) {
		return /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|16[6]|15[012356789]|17[0135678]|18[0-9]|19[9])\d{8}$/.test(
			value
		);
	},
	isUrl(value) {
		return /[a-zA-z]+:\/\/[^\s]/.test(value);
	},
	isPassword(value) {
		return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(value);
		// return true
	},
	isEthAddress(value) {
		return /^[0-9a-zA-Z]{34}$/.test(value);
	},
};


function validator(data) {
	
}

for (let i in validate) {
	validator[i] = validate[i];
}

export default validator;
