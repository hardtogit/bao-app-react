/**
 * validate data
 *
 */

import util from '../../utils/utils.js'

const rules = {
	required: (value) => {
		return /^\S+$/.test(value)
	},
	mobile: util.checkMobile,  //手机号
	password: util.checkPassword, //密码
	card: util.checkCard, //身份证号码
	bankCard: (value)=>{ return /^\d{12,19}$/.test(value) }, //银行卡号
	equalTo: (value, compareValue) => {
		return value == compareValue
	},
	captcha: (value) => {
		return /^\d{6}$/.test(value)
	},
	// 投资金额/提现 100起
	bankLimit: (value) => {
		var type = typeof Number(value)
		if (type == 'number' && !isNaN(Number(value)) && value >= 100)
			return true
		return false
	}
}

let messages = {
	required: '输入不能为空',
	mobile: '手机号格式错误',
	password: '请输入正确密码',
	equalTo: '不能相同',
	card: '身份证号码格式不正确',
	captcha: '验证码格式不正确'
}

// get the type of the param
const getType = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}

// validate helper method
const validate = function() {
	let list = []

	const validateRegItem = function (regName, value, regObj, data) {
		if (!regObj) return false
		var regObjType = getType(regObj),
			regFn = rules[regName] || '',
			message = messages[regName] || '';

		if (regObjType == 'string' && regName != 'equalTo') {
			messages = regObj;
		} else if (regObjType == 'object') {
			var reg = regObj['reg'] || rules[regName];
			message = regObj['message'] || messages['message'];
			if (getType(reg) == 'function') {
				regFn = reg
			} else if (getType(reg) == 'regexp') {
				regFn = function(value) {
					return reg.test(value)
				}
			}
		}

		if (regName == 'equalTo') {
			if (regObjType == 'object' && !regFn.call(null, value, data[regObj['name']])) {
				return {result: true}
			} else if (regObjType == 'string' && !regFn.call(null, value, data[regObj])) {
				return {result: true}
			}
		} else if (regFn.call(null, value)) {
			return {result: true}
		}

		return {result: false, message: message}
	}

	const validateItem = function (value, reg, name, data) {
		if (reg && getType(reg) == 'object') {
			for (var key in reg) {
				var validateRegItemResult = validateRegItem(key, value, reg[key], data)
				if (!validateRegItemResult.result) {
					return { 
						message: validateRegItemResult.message,
						name: name,
						value: value,
						result: false
					};
				}
			}
		}
		return {result: true}
	}

	const validateRadioGroup = (reactElement) => {
		var name = reactElement.props.name,
			formData = reactElement.formData,
			value = formData[name]
		if (value) {
			return {result: true}
		}
		return {result: false}
	}

	return {
		validateItem: function(value, reg, name, data) {
			return validateItem.apply(null, arguments);
		}
	}
}

export default validate
