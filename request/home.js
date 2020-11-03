import { http } from '../tools/index';
import { host } from '@/config';
const getStimulatePool = function(formData) {
	return http.post(host + 'incre_earn/stimulate_pool', formData);
};
const getIncrePoolList = function(formData) {
	return http.post(host + 'incre_earn/list', formData);
};
const getIncrePoolDetail = function(formData) {
	return http.post(host + 'incre_earn/detail', formData);
};

const getCurrencyList = function(formData) {
	return http.post(host + 'currency/list', formData);
};
const getDepositList = function(formData) {
	return http.post(host + 'incre_earn/storage_record', formData);
};

const getDepositDetail = function(formData) {
	return http.post(host + 'incre_earn/storage_record_detail', formData);
};

const withdrawCurrency = function(formData) {
	return http.post(host + 'incre_earn/withdraw_currency', formData);
};
const getRechargeList = function(formData) {
	return http.post(host + 'account/rechargeLog', formData);
};
const getWithdrawList = function(formData) {
	return http.post(host + 'account/withdrawLog', formData);
};
export const getInviteInfo = function(formData) {
	return http.post(host + 'user/invite', formData);
};
const getAccountBill = function(formData) {
	return http.post(host + 'account/bill', formData);
};
const getIncomeDetail = function(formData) {
	return http.post(host + 'incre_earn/income_record', formData);
};
const userPasswordLogin = function(formData) {
	return http.post(host + 'login/loginByPassword', formData);
};
const userCodeLogin = function(formData) {
	return http.post(host + 'login/loginByCatpcha', formData);
};
const sendCode = function(url,formData) {
	return http.post(host + url, formData);
};
const getUserInfo = function(formData) {
	return http.post(host + 'user/getUser', formData);
};
const userLogout = function(formData) {
	return http.post(host + 'user/logout', formData);
};
const getInviteList1 = function(formData) {
	return http.post(host + 'user/invite1Log', formData);
};
const getInviteList2 = function(formData) {
	return http.post(host + 'user/invite1Log', formData);
};
const getAssets = function(formData) {
	return http.post(host + 'account/list', formData);
};
const getRechargeAddress = function(formData) {
	return http.post(host + 'account/recharge', formData);
};
const withdrawCurrency1 = function(formData) {
	return http.post(host + 'account/withdraw', formData);
};
const updateLoginPw = function(formData) {
	return http.post(host + 'user/modifyPassword', formData);
};
const updatePayPw = function(formData) {
	return http.post(host + 'user/modifyPay', formData);
};
const forgetPw = function(formData) {
	return http.post(host + 'login/resetPassword', formData);
};
const userRegister = function(formData) {
	return http.post(host + 'login/register', formData);
};
const getDepositPage= function(formData) {
	return http.post(host + 'incre_earn/storage_currency_info', formData);
};
const depositCurrency= function(formData) {
	return http.post(host + 'incre_earn/storage_currency', formData);
};
const log = console.log.bind(console);
export {
	log,
	getStimulatePool,
	getIncrePoolList,
	getIncrePoolDetail,
	getCurrencyList,
	getDepositList,
	withdrawCurrency,
	withdrawCurrency1,
	getDepositDetail,
	getRechargeList,
	getWithdrawList,
	getAccountBill,
	getIncomeDetail,
	userPasswordLogin,
	userCodeLogin,
	sendCode,
	getUserInfo,
	userLogout,
	getInviteList1,
	getInviteList2,
	getAssets,
	getRechargeAddress,
	updateLoginPw,
	updatePayPw,
	userRegister,
	getDepositPage,
	depositCurrency,
	forgetPw
};
