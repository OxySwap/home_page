const togo = function(url, data, func = 'navigateTo') {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
	uni[func]({
		url,
	});
};

function param(data) {
	let url = '';
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : '';
		url += '&' + k + '=' + decodeURI(value);
	}
	return url ? url.substring(1) : '';
}

export { togo, param };
