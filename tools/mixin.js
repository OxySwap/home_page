import { isLogin } from '@/tools/index';
var mixins1 = {
	methods: {
		open(key) {
			this.$refs[key].open();
		},
		closeMask(key) {
			this.$refs[key].close();
		},
	},
};
var mixins2 = {
	methods: {
		//获取系统状态栏高度
		getSystemStatusBarHeight: function() {
			// #ifdef APP-PLUS
			var height = plus.navigator.getStatusbarHeight();
			this.barHeight = height;
			// #endif
			// #ifdef H5
			this.barHeight = 0;
			// #endif
			console.log(this.barHeight);
		},
	},
	onLoad: function() {
		this.getSystemStatusBarHeight();
	},
};

var mixins4 = {
	methods: {
		updateList: function(r, key, type, size = 10) {
			var res = r.data.data;
			if (type) {
				res.list = res;
			}
			var { list } = r.data.data;
			this[key] = [...this[key], ...list];
			this.moreStatus = list.length < size ? 'noMore' : 'loading';
			this.loading = false;
			this.$stopRefresh();
		},
		reset(key) {
			this[key] = [];
			this.loading = true;
			this.page = 1;
		},
	},
};

var mixins4 = {
	methods: {
		updateList: function(r, key, size = 10) {
			var { list, total } = r.data.data;
			if (this.$isPc) {
				this[key] = list;
				this.total = total;
				this.loading = false;
			} else {
				this[key] = [...this[key], ...list];
				this.moreStatus = list.length < size ? 'noMore' : 'loading';
				this.loading = false;
				this.$stopRefresh();
			}
		},
		reset(key) {
			this[key] = [];
			this.loading = true;
			this.page = 1;
		},

		selectTab(tab) {
			this.tab = tab;
			this.reset('list');
			this.getList();
		},
		selectCurrency(currency) {
			this.select = currency;
			this.reset('list');
			this.getList();
		},
		onChangePage(page) {
			this.page = page;
			this.loading = true;
			this.getList();
		},
	},
};
var mixins5 = {
	methods: {
		isLoginBack: function(callback) {
			if (isLogin()) {
				callback && callback();
			} else {
				uni.navigateTo({
					url: '/views/Home/Login',
				});
			}
		},
	},
};

export { mixins1, mixins2, mixins4, mixins5 };
