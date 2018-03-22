webpackJsonp([21],{

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _setPrototypeOf = __webpack_require__(5);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(3);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _getPrototypeOf = __webpack_require__(4);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavBar = __webpack_require__(10);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	var _selectCoupon = __webpack_require__(174);
	
	var _selectCoupon2 = _interopRequireDefault(_selectCoupon);
	
	var _actionTypes = __webpack_require__(20);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	var _reactRedux = __webpack_require__(9);
	
	var _pageWrapper = __webpack_require__(22);
	
	var _pageWrapper2 = _interopRequireDefault(_pageWrapper);
	
	var _reactRouterRedux = __webpack_require__(8);
	
	var _reactDimensions = __webpack_require__(169);
	
	var _reactDimensions2 = _interopRequireDefault(_reactDimensions);
	
	var _k = __webpack_require__(164);
	
	var _k2 = _interopRequireDefault(_k);
	
	var _circle = __webpack_require__(165);
	
	var _circle2 = _interopRequireDefault(_circle);
	
	var _utils = __webpack_require__(18);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; } //选着加息券
	
	
	var RatesCell = function (_React$Component) {
	  _inherits(RatesCell, _React$Component);
	
	  function RatesCell() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RatesCell);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RatesCell.__proto__ || (0, _getPrototypeOf2.default)(RatesCell)).call.apply(_ref, [this].concat(args))), _this), _this.nullDom = function (src) {
	      return _react2.default.createElement('img', { src: src, className: _selectCoupon2.default.nullImg });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RatesCell, [{
	    key: 'renderVoucher',
	    value: function renderVoucher(data, index) {
	      var _this2 = this;
	
	      var _props = this.props;
	      var selected = _props.selected;
	      var money = _props.money;
	      var amount = data.amount;
	      var apply = data.apply;
	      var end_date = data.end_date;
	      var start_date = data.start_date;
	      var id = data.id;
	      var invest_money = data.invest_money;
	      var type = data.type;
	
	      var Dom = void 0;
	      if (money < parseFloat(invest_money)) {
	        Dom = _react2.default.createElement(
	          'span',
	          { className: _selectCoupon2.default.noUse },
	          '\u4E0D\u53EF\u7528'
	        );
	      } else {
	        Dom = selected.id == id ? _react2.default.createElement('img', { src: _k2.default, alt: '\u9009\u4E2D' }) : _react2.default.createElement('img', { onClick: function onClick() {
	            _this2.props.onSelect(data);
	          }, src: _circle2.default });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: _selectCoupon2.default.rateCell, key: index, style: { width: this.props.screenW } },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              amount + '元' + type
	            ),
	            Dom
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u6295\u8D44',
	              invest_money,
	              '\u5373\u53EF\u4F7F\u7528'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              apply
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { backgroundColor: 'rgb(125,206,159)' } },
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u6709\u6548\u671F',
	            start_date,
	            '\u5230',
	            end_date
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderInterestRate',
	    value: function renderInterestRate(data, index) {
	      var _this3 = this;
	
	      var _props2 = this.props;
	      var selected = _props2.selected;
	      var money = _props2.money;
	      var rate = data.rate;
	      var apply = data.apply;
	      var end_date = data.end_date;
	      var start_date = data.start_date;
	      var id = data.id;
	      var invest_money = data.invest_money;
	      var type = data.type;
	
	      var Dom = void 0;
	      if (money < parseFloat(invest_money)) {
	        Dom = _react2.default.createElement(
	          'span',
	          { className: _selectCoupon2.default.noUse },
	          '\u4E0D\u53EF\u7528'
	        );
	      } else {
	        Dom = selected.id == id ? _react2.default.createElement('img', { src: _k2.default, alt: '\u9009\u4E2D' }) : _react2.default.createElement('img', { onClick: function onClick() {
	            _this3.props.onSelect(data);
	          }, src: _circle2.default });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: _selectCoupon2.default.rateCell, key: index, style: { width: this.props.screenW } },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              rate + '%' + type
	            ),
	            Dom
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u6295\u8D44',
	              invest_money,
	              '\u5373\u53EF\u4F7F\u7528'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              apply
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { backgroundColor: '#feb178' } },
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u6709\u6548\u671F',
	            start_date,
	            '\u5230',
	            end_date
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var type = this.props.type;
	
	      if (!this.props.datas) return null;
	      var dy = [],
	          jx = [];
	      this.props.datas.map(function (data, index) {
	        if (type == 1) {
	          dy.push(_this4.renderVoucher(data, index));
	        } else {
	          jx.push(_this4.renderInterestRate(data, index));
	        }
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: _selectCoupon2.default.listBox },
	        dy,
	        jx
	      );
	    }
	  }]);
	
	  return RatesCell;
	}(_react2.default.Component);
	
	// const ArriveCell = (props) => (
	
	//   )
	
	var SelectCoupon = function (_React$Component2) {
	  _inherits(SelectCoupon, _React$Component2);
	
	  function SelectCoupon(props) {
	    _classCallCheck(this, SelectCoupon);
	
	    var _this5 = _possibleConstructorReturn(this, (SelectCoupon.__proto__ || (0, _getPrototypeOf2.default)(SelectCoupon)).call(this, props));
	
	    _this5.changeType = function (ele) {
	      if (ele != _this5.state.selectID) {
	        _this5.setState({
	          selectID: ele
	        });
	      }
	    };
	
	    _this5.selectHandle = function (counpon) {
	      _this5.setState({ selectedCoupon: counpon });
	    };
	
	    _this5.useCouponHandle = function () {
	      var selectedCoupon = _this5.state.selectedCoupon;
	
	      _this5.props.setUseCoupons(selectedCoupon, true);
	      _this5.props.useFn(selectedCoupon);
	      _this5.props.click();
	      if (selectedCoupon.type == '加息券') {
	        _this5.props.useCoupon(selectedCoupon.rate);
	      } else {
	        _this5.props.useCoupon();
	      }
	    };
	
	    _this5.unUseCouponHandle = function () {
	      _this5.setState({ selectedCoupon: '' });
	      _this5.props.setUseCoupons('', false);
	      _this5.props.goBack();
	    };
	
	    _this5.nullCoupon = function () {
	      _this5.props.nullCoupon();
	      _this5.props.useFn(null);
	    };
	
	    _this5.state = {
	      selectID: 1,
	      selectedCoupon: _this5.props.selectedCoupon
	    };
	    return _this5;
	  }
	
	  _createClass(SelectCoupon, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {}
	
	    // 选中优惠券
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;
	
	      var _props3 = this.props;
	      var click = _props3.click;
	      var money = _props3.money;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _selectCoupon2.default.root },
	        _react2.default.createElement(_NavBar2.default, { title: '\u9009\u62E9\u4F18\u60E0\u5238', leftNode: _react2.default.createElement(
	            'span',
	            { style: { paddingLeft: '15px' } },
	            '\u5173\u95ED'
	          ),
	          onLeft: click, style: { position: 'absolute', left: '0px', top: '0px' } }),
	        _react2.default.createElement('div', { style: { height: 44 } }),
	        _react2.default.createElement(
	          'div',
	          { className: _selectCoupon2.default.selectDiv },
	          _react2.default.createElement(
	            'div',
	            { style: { borderBottomColor: this.state.selectID === 1 ? '#00a6e2' : 'transparent' }, onClick: function onClick() {
	                _this6.changeType(1);
	              } },
	            _react2.default.createElement(
	              'p',
	              { style: { color: this.state.selectID === 1 ? '#00a6e2' : '#626262' } },
	              '\u62B5\u7528\u5238'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { borderBottomColor: this.state.selectID === 2 ? '#00a6e2' : 'transparent' }, onClick: function onClick() {
	                _this6.changeType(2);
	              } },
	            _react2.default.createElement(
	              'p',
	              { style: { color: this.state.selectID === 2 ? '#00a6e2' : '#626262' } },
	              '\u52A0\u606F\u5238'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { flex: 1, overflowY: 'scroll', position: 'relative' } },
	          _react2.default.createElement(RatesCell, {
	            onSelect: this.selectHandle,
	            datas: this.state.selectID == 1 ? this.props.vouchers : this.props.interestRates,
	            type: this.state.selectID,
	            money: money,
	            selected: this.state.selectedCoupon || ''
	          })
	        ),
	        _react2.default.createElement('div', { style: { height: 50 } }),
	        _react2.default.createElement(
	          'div',
	          { className: _selectCoupon2.default.sure },
	          _react2.default.createElement(
	            'div',
	            { onClick: this.nullCoupon },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u4E0D\u4F7F\u7528\u4F18\u60E0'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { onClick: this.useCouponHandle },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u4F7F\u7528'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return SelectCoupon;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var couponsData = state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data']);
	
	  return {
	    vouchers: couponsData && couponsData.data && couponsData.data.filter(function (coupon) {
	      return coupon.type === '抵用券';
	    }),
	    interestRates: couponsData && couponsData.data && couponsData.data.filter(function (coupon) {
	      return coupon.type === '加息券';
	    }),
	    selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon'])
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    setAppointPassword: function setAppointPassword(value) {
	      dispatch({
	        type: actionTypes.SET_APPOINT_PASSWORD,
	        payload: value
	      });
	    },
	    push: function push(path) {
	      dispatch((0, _reactRouterRedux.push)(path));
	    },
	    goBack: function goBack() {
	      dispatch((0, _reactRouterRedux.goBack)());
	    },
	    setUseCoupons: function setUseCoupons(selectedCoupon, useCoupon) {
	      dispatch({
	        type: actionTypes.SET_USE_COUPONS,
	        useCoupon: useCoupon,
	        selectedCoupon: selectedCoupon
	      });
	    }
	  };
	};
	
	exports.default = (0, _reactDimensions2.default)()((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _pageWrapper2.default)(SelectCoupon)));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".root___26zht{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#f5f5f5}.root___26zht,.selectDiv___1ZdjX{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.selectDiv___1ZdjX{height:40px;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #ddd}.selectDiv___1ZdjX>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:2px solid transparent}.selectDiv___1ZdjX>div>p{font-size:16px;color:#000}.selectDiv___1ZdjX div:nth-child(1){border-bottom-color:#00a6e2}.selectDiv___1ZdjX div:nth-child(1)>p{color:#00a6e2}.rateCell___2WGU7{margin:10px 15px;height:171px;background:#fff}.rateCell___2WGU7>div:nth-child(1){height:131px;padding:0 20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1){height:50px;border-bottom:1px solid #888;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>p{line-height:50px;font-size:15px;color:#111}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>div{height:20px;margin-top:15px;width:20px;border-radius:10px;border:1px solid #00a7e1;background:transparent}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(1)>img{height:20px;margin-top:15px;width:20px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p{color:#888;font-size:13px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(1){margin-top:18px}.rateCell___2WGU7>div:nth-child(1)>div:nth-child(2)>p:nth-child(2){margin-top:10px}.rateCell___2WGU7>div:nth-child(2){background:#feb178;height:40px}.rateCell___2WGU7>div:nth-child(2)>p{color:#fff;margin-left:20px;line-height:40px;font-size:13px}.noUse___vAjam{line-height:49px;font-size:20px;color:#aaa}.sure___22RPV{position:absolute;bottom:0;height:50px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sure___22RPV,.sure___22RPV>div{display:-webkit-box;display:-ms-flexbox;display:flex}.sure___22RPV>div{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#59c5ec}.sure___22RPV>div>p{font-size:16px;color:#fff}.sure___22RPV div:nth-child(1){width:30%}.sure___22RPV div:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;background:#00a7e1}.nullImg___2k9fu{width:161px;position:absolute;left:50%;top:50%}.listBox___1fRXU{position:absolute;left:0;top:0;width:100%;height:100%;overflow:scroll}", ""]);
	
	// exports
	exports.locals = {
		"root": "root___26zht",
		"selectDiv": "selectDiv___1ZdjX",
		"rateCell": "rateCell___2WGU7",
		"noUse": "noUse___vAjam",
		"sure": "sure___22RPV",
		"nullImg": "nullImg___2k9fu",
		"listBox": "listBox___1fRXU"
	};

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/0k2.2fc4ca54.png";

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/circle.f77227eb.png";

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/less-loader/index.js!./selectCoupon.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/less-loader/index.js!./selectCoupon.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".root___16a1E{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;background:#f5f5f5}.bg___30WRx{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto}.title___10aGB{font-size:14px;color:#888;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:15px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.zg___2zeVC{position:absolute;left:0;top:0;width:100%;height:100%;background-color:red;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;z-index:9999}.scroll___22zyx{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.scroll___22zyx::-webkit-scrollbar{width:0}.scroll___22zyx::-webkit-scrollbar-thumb{border-radius:2px;background:#999}.infomation___32fbs{background:#fff;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex}.infomation___32fbs>div{-webkit-box-flex:1;-ms-flex:1;flex:1}.infomation___32fbs>div p:first-child{color:#898989;font-size:16px}.infomation___32fbs>div p:first-child>span{font-size:12px}.infomation___32fbs>div p:nth-child(2){margin-top:10px;font-size:18px;color:#000}.buyDiv___179-j{padding:17px 15px 27px;background:#fff;color:#000;font-size:16px}.buyDiv___179-j .buyTip___39qeh{font-size:12px}.expectIncome___h5Qpn{background-color:#fff;padding:0 0 0 15px;height:44}.expectIncome___h5Qpn .wrap___kVTuH{border-top:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.expectIncome___h5Qpn .name___2zGvu{color:#888;line-height:44px}.expectIncome___h5Qpn .profit___3Mtad{color:#ff7701;line-height:44px;-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:15px}.payMoney___1oqMx{background:#fff;padding:25px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ddd}.payMoney___1oqMx>p:nth-child(1){line-height:20px;font-size:14px;color:#898989;-webkit-box-flex:1;-ms-flex:1;flex:1}.payMoney___1oqMx>p:nth-child(2){font-size:25px;color:#ff7701}.payBtn___8SZcY{padding:10px 15px 0;background:#f5f5f5}.payBtn___8SZcY>p{color:#888;font-size:14}.payBtn___8SZcY>div{margin-top:30px;height:54px;border-radius:3px;background:#49a7de;line-height:50px;font-size:16px;color:#fff;text-align:center}.coupon___2zRNl{background-color:#fcfcfc;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.coupon___2zRNl>span{font-size:16px}.coupon___2zRNl>div,.coupon___2zRNl>div div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.coupon___2zRNl>div div{position:relative;height:25px;background-color:#75cda1;padding:0 12px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.coupon___2zRNl>div div:after,.coupon___2zRNl>div div:before{content:'';height:30px;width:35px;position:absolute;background-color:#fcfcfc;border-radius:100%}.coupon___2zRNl>div div:before{top:-3px;left:-30px}.coupon___2zRNl>div div:after{top:-3px;right:-30px}.coupon___2zRNl>div:after{display:inline-block;content:'';width:9px;height:16px;background:url(" + __webpack_require__(38) + ");background-size:100% 100%;margin-left:7px;z-index:2}.discountBar___3AWpB{margin-top:20px;background-color:#fcfcfc;padding:0 15px}.discountBarTouch___CLUyt{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.discountBarName___1png_{-webkit-box-flex:1;-ms-flex:1;flex:1;fontsize:16px;color:#888}.textContent___3uTP0{padding-left:15px;padding-top:10px;padding-right:6px;color:#888;font-size:14px}.protocol___FGzfi{color:#00a6e2}", ""]);
	
	// exports
	exports.locals = {
		"root": "root___16a1E",
		"bg": "bg___30WRx",
		"title": "title___10aGB",
		"zg": "zg___2zeVC",
		"scroll": "scroll___22zyx",
		"infomation": "infomation___32fbs",
		"buyDiv": "buyDiv___179-j",
		"buyTip": "buyTip___39qeh",
		"expectIncome": "expectIncome___h5Qpn",
		"wrap": "wrap___kVTuH",
		"name": "name___2zGvu",
		"profit": "profit___3Mtad",
		"payMoney": "payMoney___1oqMx",
		"payBtn": "payBtn___8SZcY",
		"coupon": "coupon___2zRNl",
		"discountBar": "discountBar___3AWpB",
		"discountBarTouch": "discountBarTouch___CLUyt",
		"discountBarName": "discountBarName___1png_",
		"textContent": "textContent___3uTP0",
		"protocol": "protocol___FGzfi"
	};

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(371);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/less-loader/index.js!./directBuy.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/less-loader/index.js!./directBuy.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 936:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	import _isIterable from 'babel-runtime/core-js/is-iterable';
	import _getIterator from 'babel-runtime/core-js/get-iterator';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _setPrototypeOf = __webpack_require__(5);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(3);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _assign = __webpack_require__(41);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(4);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (_isIterable(Object(arr))) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavBar = __webpack_require__(10);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	var _directBuy = __webpack_require__(455);
	
	var _directBuy2 = _interopRequireDefault(_directBuy);
	
	var _actionTypes = __webpack_require__(20);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	var _reactRouter = __webpack_require__(19);
	
	var _reactRedux = __webpack_require__(9);
	
	var _pageWrapper = __webpack_require__(22);
	
	var _pageWrapper2 = _interopRequireDefault(_pageWrapper);
	
	var _reactRouterRedux = __webpack_require__(8);
	
	var _utils = __webpack_require__(18);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _customInput = __webpack_require__(179);
	
	var _customInput2 = _interopRequireDefault(_customInput);
	
	var _BaseButton = __webpack_require__(25);
	
	var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
	var _payProcess = __webpack_require__(264);
	
	var _payProcess2 = _interopRequireDefault(_payProcess);
	
	var _Tipbar = __webpack_require__(26);
	
	var _Tipbar2 = _interopRequireDefault(_Tipbar);
	
	var _selectCoupon = __webpack_require__(141);
	
	var _selectCoupon2 = _interopRequireDefault(_selectCoupon);
	
	var _isAuth = __webpack_require__(58);
	
	var _isAuth2 = _interopRequireDefault(_isAuth);
	
	var _index = __webpack_require__(104);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _utils3 = __webpack_require__(18);
	
	var _utils4 = _interopRequireDefault(_utils3);
	
	var _setUrl = __webpack_require__(69);
	
	var _setUrl2 = _interopRequireDefault(_setUrl);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var hostName = window.location.origin;
	
	var DirectBuy = function (_React$Component) {
	    _inherits(DirectBuy, _React$Component);
	
	    function DirectBuy(props) {
	        _classCallCheck(this, DirectBuy);
	
	        var _this = _possibleConstructorReturn(this, (DirectBuy.__proto__ || (0, _getPrototypeOf2.default)(DirectBuy)).call(this, props));
	
	        _this.changePending = function () {
	            _this.setState({
	                pending: false
	            });
	        };
	
	        _this.ifScan = function (e) {
	            if (_this.state.checkBox) {
	                _this.setState({
	                    checkBox: false
	                });
	            } else {
	                _this.setState({
	                    checkBox: true
	                });
	            }
	        };
	
	        _this.directInvestBuy = function (password, money) {
	
	            var coupon = _this.props.useCoupon ? _this.getCoupon() : null;
	            var useCoupon = _this.state.useCoupon;
	
	            if (!useCoupon && coupon) {
	                coupon.id = '';
	            }
	            _this.setState({
	                pendding: true
	            });
	
	            _this.props.balancePay(_this.directInvestId, _this.state.quantity, password, sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '', "WAP", sessionStorage.getItem('mapKey'));
	        };
	
	        _this.directCardBuy = function (password, money, bankCard) {
	            var coupon = _this.props.useCoupon ? _this.getCoupon() : null;
	            var useCoupon = _this.state.useCoupon;
	
	            if (!useCoupon && coupon) {
	                coupon.id = '';
	            }
	            _this.setState({
	                pending: true
	            });
	            _this.props.cardPay(bankCard, Number(_utils2.default.padMoney(_this.getPayTotal())), _this.directInvestId, _this.state.quantity, password, sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '', "WAP", sessionStorage.getItem('mapKey'));
	        };
	
	        _this.onValid = function () {
	            var select = _this.state.select;
	
	            if (select == 1) {
	                _this.refs.isAuth.isSecurityCard(_this.successsFn, _this.props.push, '/user/setting/tradePasswordSet');
	            } else {
	                _this.successsFn();
	            }
	        };
	
	        _this.successsFn = function () {
	            var coupon = _this.state.useCoupon && _this.getCoupon() || null;
	            var use = _this.props.use;
	
	            if (use) {
	                if (use.code == 100) {
	                    if (use.data.is && coupon) {
	                        coupon.id = '';
	                    }
	                }
	            }
	            _this.setState({
	                time: 0
	            });
	            if (_this.state.select == 1) {
	                _this.props.goBankPage({
	                    way: 1,
	                    type: 451,
	                    returnUrl: '',
	                    data: {}
	                });
	            } else {
	                // 调用支付流程
	                _this.refs.payProcess.open({
	                    id: _this.directInvestId,
	                    num: _this.state.quantity,
	                    couponId: coupon && coupon.id || '',
	                    borrowPwd: _this.borrowPwd
	                });
	            }
	        };
	
	        _this.changeQuantity = function (value) {
	            if (value <= 0) {
	                _this.refs.tipbar.open('购买份数必须为正整数!');
	            } else if (value > parseFloat(_this.props.detail.left_quantity)) {
	                _this.refs.tipbar.open('剩余份数不足!');
	            }
	            _this.setState({ quantity: Number(value) });
	        };
	
	        _this.voucherIsAvailable = function (voucher) {
	            var payTotal = Number(_this.state.quantity * _this.state.unitPrice);
	
	            return voucher.invest_money <= payTotal;
	        };
	
	        _this.voucherIsNotAvailable = function (voucher) {
	            return !_this.voucherIsAvailable(voucher);
	        };
	
	        _this.getCoupon = function () {
	
	            // 1. 用户选择的、可用的优惠券
	            if (_this.props.selectedCoupon && (_this.props.selectedCoupon.type === '抵用券' && _this.voucherIsAvailable(_this.props.selectedCoupon) || _this.props.selectedCoupon.type === '加息券')) {
	                return _this.props.selectedCoupon;
	            } else {
	                // 2. 可用的、最优惠的优惠券
	                return _this.getMaxCoupon();
	            }
	        };
	
	        _this.getPayTotal = function (type) {
	            var coupon = _this.getCoupon();
	            var useCoupon = _this.state.useCoupon;
	
	            if (type) {
	                return _this.state.quantity * _this.state.unitPrice;
	            }
	            if (!useCoupon) {
	                return _this.state.quantity * _this.state.unitPrice;
	            }
	            if (_this.props.useCoupon && coupon && coupon.type === '抵用券') {
	                return _this.state.quantity * _this.state.unitPrice - Number(coupon.amount);
	            } else {
	                return _this.state.quantity * _this.state.unitPrice;
	            }
	        };
	
	        _this.expectIncome = function () {
	            var detail = _this.props.detail;
	            var rate = _this.state.rate;
	
	            if (_utils2.default.isPlainObject(detail)) return '';
	            var totalRate = detail.rate / 100;
	            var jxRate = _this.getMaxCoupon();
	            if (rate != 0) {
	                var rateN = parseFloat(rate) / 100;
	                totalRate = totalRate + rateN;
	            }
	            if (jxRate && _this.state.useCoupon) {
	                if (jxRate.type == "加息券" && typeof rate == 'boolean') {
	                    var _rateN = parseFloat(jxRate.rate) / 100;
	                    totalRate = totalRate + _rateN;
	                }
	            }
	            if (_this.props.useCoupon && _this.state.useCoupon) {
	                var coupon = _this.props.selectedCoupon || _this.getMaxCoupon();
	                if (coupon && coupon.type === '加息券' && +coupon.rate >= 0 && +detail.directRate >= 0) {
	                    totalRate += +coupon.rate / 100;
	                }
	            }
	            return _utils2.default.padMoney(_this.state.unitPrice * _this.state.quantity * detail.term * totalRate / 12);
	        };
	
	        _this.overPay = function (val, data) {
	            var id = data.id;
	            var num = data.num;
	            var couponId = data.couponId;
	            var payPwd = '';
	            var type = 2;
	            var borrowPwd = _this.props.location.state;
	            var url = _utils4.default.combineUrl(hostName + '/mobile_api/directInvest/buy/' + id, { num: num, payPwd: payPwd, type: type, couponId: couponId, borrowPwd: borrowPwd });
	            _this.setState({
	                url: url,
	                payTop: '0px'
	            });
	        };
	
	        _this.selectPayHandle = function (payWay) {
	            _this.setState({ chosenPay: payWay });
	        };
	
	        _this.renderDiscountBar = function () {
	            // 还未加载完抵用券和加息券，渲染占位View
	            if (_this.state.couponsFetching) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _directBuy2.default.discountBarTouch },
	                    _react2.default.createElement(
	                        'p',
	                        { className: _directBuy2.default.discountBarName },
	                        '\u6B63\u5728\u52A0\u8F7D\u4F18\u60E0\u5238'
	                    )
	                );
	            }
	
	            var coupon = _this.getCoupon();
	            if (!coupon || _this.state.quantity < 1) {
	                var use = _this.props.use;
	
	                if (use) {
	                    if (use.code == 100 && use.data.is) {
	                        return _react2.default.createElement(
	                            'div',
	                            {
	                                className: _directBuy2.default.coupon
	                            },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                use.data.name
	                            )
	                        );
	                    }
	                }
	                var vouchers = _this.state.vouchers.sort(function (a, b) {
	                    return Number(b.amount) - Number(a.amount);
	                });
	
	                var availableVouchers = vouchers.filter(_this.voucherIsAvailable);
	
	                var unavailableVouchers = vouchers.filter(_this.voucherIsNotAvailable).map(function (voucher) {
	                    return (0, _assign2.default)({}, voucher, { status: 'unavailable' });
	                });
	
	                vouchers = availableVouchers.concat(unavailableVouchers);
	                var interestRates = _this.state.interestRates.sort(function (a, b) {
	                    return Number(b.rate) - Number(a.rate);
	                });
	
	                return _react2.default.createElement(
	                    'div',
	                    {
	                        className: _directBuy2.default.discountBarTouch,
	                        onClick: function onClick() {
	                            _this.openDy();
	                        } },
	                    _react2.default.createElement(
	                        'p',
	                        { className: _directBuy2.default.discountBarName },
	                        '\u6682\u65E0\u4F18\u60E0\u53EF\u7528'
	                    )
	                );
	            } else {
	                var _use = _this.props.use;
	
	                var couponText = coupon.type === '抵用券' ? '\u62B5\u7528\u5238\u62B5\u6263' + (coupon.amount || '') + '\u5143' : '\u52A0\u606F\u5238\u52A0\u606F' + (coupon.rate || '') + '%';
	
	                var _vouchers = _this.state.vouchers.sort(function (a, b) {
	                    return Number(b.amount) - Number(a.amount);
	                });
	
	                var _availableVouchers = _vouchers.filter(_this.voucherIsAvailable);
	
	                var _unavailableVouchers = _vouchers.filter(_this.voucherIsNotAvailable).map(function (voucher) {
	                    return (0, _assign2.default)({}, voucher, { status: 'unavailable' });
	                });
	                if (_use) {
	                    if (_use.code == 100 && _use.data.is) {
	                        return _react2.default.createElement(
	                            'div',
	                            {
	                                className: _directBuy2.default.coupon
	                            },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                _use.data.name
	                            )
	                        );
	                    }
	                }
	                var card = _this.state.useCoupon && _this.props.useCoupon ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        couponText
	                    )
	                ) : null;
	                return _react2.default.createElement(
	                    'div',
	                    {
	                        className: _directBuy2.default.coupon,
	                        onClick: function onClick() {
	                            _this.openDy();
	                        } },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u4F7F\u7528\u4F18\u60E0'
	                    ),
	                    card
	                );
	            }
	        };
	
	        _this.useDy = function (amount) {
	            _this.setState({
	                choose: amount
	            });
	        };
	
	        _this.clickFn = function () {
	            _this.setState({
	                top: '100%'
	            });
	        };
	
	        _this.openDy = function () {
	            var money = _this.getPayTotal(true);
	            _this.setState({ top: '0px', money: money });
	        };
	
	        _this.nullCoupon = function () {
	            _this.setState({
	                top: '100%',
	                useCoupon: false,
	                rate: 0
	            });
	        };
	
	        _this.useCoupon = function (rate) {
	            _this.setState({
	                top: '100%',
	                useCoupon: true
	            });
	            if (rate) {
	                _this.setState({
	                    rate: rate
	                });
	            } else {
	                _this.setState({
	                    rate: 0
	                });
	            }
	        };
	
	        _this.getChoose = function (select) {
	            _this.setState({
	                select: select
	            });
	        };
	
	        _this.pop = function () {
	            var time = _this.refs.pay.getTime();
	            if (time != 1) {
	                _this.props.push(_setUrl2.default.getUrl());
	            } else {
	                _this.props.goBack();
	            }
	        };
	
	        _this.closeFn = function () {
	            _this.setState({ payTop: '100%', url: '' });
	        };
	
	        _this.state = {
	            quantity: 200, // 购买数量
	            unitPrice: 50, // 单价
	            chosenPay: '',
	            vouchers: [],
	            interestRates: [],
	            top: '100%',
	            choose: '',
	            money: '',
	            checkBox: true,
	            useCoupon: true,
	            payTop: '100%',
	            url: '',
	            select: 1,
	            rate: false,
	            init: true,
	            pending: false,
	            time: 0
	        };
	
	        _this.directInvestId = _this.props.params.id;
	        _this.borrowPwd = _utils2.default.getParams().borrowPwd;
	        return _this;
	    }
	
	    _createClass(DirectBuy, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.refs.choice.checked = true;
	            window['closeFn'] = this.closeFn;
	            this.props.getDirectInvestDetail(this.directInvestId);
	            this.props.getAvailableCoupons(this.props.params.month);
	            this.props.getUse(this.props.params.id);
	            this.props.getMyBankCards();
	            this.props.getUser();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var buyData = nextProps.buyData;
	            var verifyData = nextProps.verifyData;
	            var carBuyData = nextProps.carBuyData;
	            var cardVerifyData = nextProps.cardVerifyData;
	
	            var $this = this;
	            if (!_utils2.default.isPlainObject(this.props.detail)) {
	                var quantity = this.props.detail.left_quantity ? this.props.detail.left_quantity < this.state.quantity ? this.props.detail.left_quantity : this.state.quantity : 1;
	                var unitPrice = this.props.detail.each_money;
	                this.setState({ quantity: quantity, unitPrice: unitPrice });
	            }
	
	            if (!this.hasSetCoupon && nextProps.couponsData && nextProps.couponsData.data) {
	                this.hasSetCoupon = true;
	                this.setState({
	                    vouchers: nextProps.couponsData.data.filter(function (coupon) {
	                        return coupon.type === '抵用券';
	                    }),
	                    interestRates: nextProps.couponsData.data.filter(function (coupon) {
	                        return coupon.type === '加息券';
	                    })
	                });
	            }
	            if (nextProps.buyPending) {
	                this.setState({
	                    pending: true
	                });
	            }
	            if (carBuyData && carBuyData.status == 1) {
	                if (this.state.time <= 3) {
	                    this.setState({
	                        time: this.state.time + 1
	                    });
	                    if (cardVerifyData && cardVerifyData.code == '0001') {} else {
	                        if (this.state.time >= 3) {
	                            if (cardVerifyData && cardVerifyData.code != '0001') {
	                                this.setState({
	                                    time: 0
	                                });
	                            } else {}
	                        } else {
	                            setTimeout(function () {
	                                $this.props.cardPayVerify({ id: carBuyData.msgId });
	                            }, 2000);
	                        }
	                    }
	                }
	            }
	            if (buyData && buyData.status == 1) {
	                if (this.state.time <= 3) {
	                    this.setState({
	                        time: this.state.time + 1
	                    });
	                    if (verifyData && verifyData.code == '0001') {} else {
	                        if (this.state.time >= 3) {
	                            if (verifyData && verifyData.code != '0001') {
	                                this.setState({
	                                    time: 0
	                                });
	                                this.changePending();
	                            } else {
	                                this.changePending();
	                            }
	                        } else {
	                            setTimeout(function () {
	                                $this.props.payVerify({ id: buyData.msgId });
	                            }, 2000);
	                        }
	                    }
	                }
	            } else if (buyData && buyData.status != 1) {}
	            if (nextProps.use && nextProps.use.data.is) {
	                this.setState({
	                    useCoupon: false
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.clearData();
	        }
	        //是否阅读合同
	
	    }, {
	        key: 'canPay',
	
	
	        // 能否支付
	        value: function canPay() {
	            var detail = this.props.detail;
	            if (_utils2.default.isPlainObject(detail)) return false;
	            if (!this.state.checkBox) {
	                return false;
	            }
	            if (Number(_utils2.default.padMoney(this.getPayTotal())) > this.props.user.balance) {
	                return false;
	            }
	            return this.state.quantity && detail.left_quantity && this.state.quantity <= detail.left_quantity ? true : false;
	        }
	
	        // 确认支付
	
	
	        // 获取用户将要使用的优惠券
	
	    }, {
	        key: 'getMaxCoupon',
	
	
	        // 当前可用的、最优惠的优惠券
	        value: function getMaxCoupon() {
	            // const quantity =
	            var payTotal = Number(this.state.quantity * this.state.unitPrice);
	            var maxVoucher = void 0,
	                maxInterestRate = void 0,
	                maxCoupon = void 0;
	            // 选出面值最大的抵用券
	            if (this.state.vouchers.length > 0) {
	                var availableVouchers = this.state.vouchers.filter(this.voucherIsAvailable);
	
	                maxVoucher = availableVouchers[0];
	
	                availableVouchers.forEach(function (voucher) {
	                    if (Number(voucher.amount) > Number(maxVoucher.amount)) {
	                        maxVoucher = voucher;
	                    }
	                });
	            }
	
	            // 选出面值最大的加息券
	            if (this.state.interestRates.length > 0) {
	                maxInterestRate = this.state.interestRates[0];
	
	                this.state.interestRates.forEach(function (ir) {
	                    if (Number(ir.rate) > Number(maxInterestRate.rate)) {
	                        maxInterestRate = ir;
	                    }
	                });
	            }
	
	            if (maxVoucher && maxInterestRate) {
	                // 两种都有
	                var maxInterestRateAmount = payTotal * Number(maxInterestRate.rate) / 100 / 12 * this.props.params.month;
	                if (maxInterestRateAmount > Number(maxVoucher.amount)) {
	                    // 抵用券优惠更多
	                    maxCoupon = maxInterestRate;
	                } else {
	                    // 加息券优惠更多
	                    maxCoupon = maxVoucher;
	                }
	            } else if (maxVoucher) {
	                // 没有加息券
	                maxCoupon = maxVoucher;
	            } else if (maxInterestRate) {
	                // 没有抵用券
	                maxCoupon = maxInterestRate;
	            }
	
	            return maxCoupon;
	        }
	
	        // 计算预期收益
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var detail = this.props.detail;
	            var id = this.props.params.id;
	
	            //let banksList={}
	
	            if (this.props.banks && this.props.banks.data) {
	                var banksList = this.props.banks.data;
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: _directBuy2.default.root },
	                _react2.default.createElement(
	                    'div',
	                    { className: _directBuy2.default.bg },
	                    _react2.default.createElement(_NavBar2.default, { title: '\u8D2D\u4E70\u652F\u4ED8', onLeft: this.pop }),
	                    _react2.default.createElement('div', { style: { height: 44 } }),
	                    _react2.default.createElement(
	                        'p',
	                        { className: _directBuy2.default.title },
	                        '\u8D2D\u4E70\u4EA7\u54C1\uFF1A\u76F4\u6295 ',
	                        detail.term,
	                        '\u4E2A\u6708 \u5E74\u5316\u5229\u7387\uFF08',
	                        detail.rate || '',
	                        '%\uFF09'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _directBuy2.default.scroll },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _directBuy2.default.infomation },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '\u5355\u4EF7',
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '\uFF08\u5143/\u4EFD\uFF09'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    this.state.unitPrice
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '\u4EFD\u6570',
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '\uFF08\u5269\u4F59',
	                                        detail.left_quantity || '',
	                                        '\uFF09'
	                                    )
	                                ),
	                                _react2.default.createElement(_customInput2.default, {
	                                    containerStyle: { marginTop: 12 },
	                                    value: this.state.quantity,
	                                    onChange: this.changeQuantity })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _directBuy2.default.expectIncome },
	                            _react2.default.createElement(
	                                'div',
	                                { className: _directBuy2.default.wrap },
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: _directBuy2.default.name },
	                                    '\u9884\u671F\u6536\u76CA\uFF08\u5143\uFF09'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: _directBuy2.default.profit },
	                                    this.expectIncome(this.state.quantity)
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _directBuy2.default.discountBar },
	                            this.renderDiscountBar()
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _directBuy2.default.payMoney },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '\u8FD8\u9700\u652F\u4ED8\uFF08\u5143\uFF09'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                _utils2.default.padMoney(this.getPayTotal())
	                            )
	                        ),
	                        _react2.default.createElement(_payProcess2.default, {
	                            ref: 'payProcess',
	                            productId: id,
	                            num: this.state.quantity,
	                            type: 'directInvest',
	                            go: this.props.push,
	                            getChoose: this.getChoose,
	                            overPay: this.overPay,
	                            user: this.props.user,
	                            banks: this.props.banks && this.props.banks.data,
	                            time: this.state.time,
	                            balance: this.props.user.balance || 0,
	                            onRequestBalancePay: this.directInvestBuy,
	                            onRequestCardPay: this.directCardBuy,
	                            verifyData: this.props.verifyData,
	                            inputValue: Number(_utils2.default.padMoney(this.getPayTotal())),
	                            balancePayPending: this.state.pending,
	                            balancePayData: this.props.buyData,
	                            cardPayData: this.props.carBuyData,
	                            cardVerifyData: this.props.cardVerifyData,
	                            changePending: this.changePending,
	                            clear: this.props.clear }),
	                        _react2.default.createElement(
	                            'p',
	                            { className: _directBuy2.default.textContent },
	                            _react2.default.createElement('input', { ref: 'choice', onChange: this.ifScan, style: { marginRight: '6px' }, type: 'checkbox' }),
	                            '\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u5B9D\u70B9\u7F51',
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/directContract', className: _directBuy2.default.protocol },
	                                '\u300A\u501F\u8D37\u53CA\u62C5\u4FDD\u670D\u52A1\u534F\u8BAE\u300B'
	                            )
	                        ),
	                        _react2.default.createElement(_BaseButton2.default, {
	                            containerStyle: { margin: '40px 15px 20px' },
	                            text: '\u786E\u8BA4\u652F\u4ED8',
	                            disable: this.canPay() > 0 ? false : true,
	                            onClick: this.onValid,
	                            status: this.canPay() > 0 ? '' : 'disable'
	                        })
	                    ),
	                    _react2.default.createElement(_Tipbar2.default, { ref: 'tipbar' }),
	                    _react2.default.createElement(_isAuth2.default, { ref: 'isAuth' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _directBuy2.default.zg, style: { top: this.state.top } },
	                    _react2.default.createElement(_selectCoupon2.default, { click: this.clickFn, useFn: this.useDy, money: this.state.money,
	                        nullCoupon: this.nullCoupon,
	                        useCoupon: this.useCoupon })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _directBuy2.default.zg, style: { top: this.state.payTop } },
	                    _react2.default.createElement(_index2.default, { url: this.state.url, closeFn: this.closeFn, ref: 'pay' })
	                )
	            );
	        }
	    }]);
	
	    return DirectBuy;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var userData = state.infodata.getIn([actionTypes.USER_INFO, 'data']);
	    var detail = state.infodata.getIn(['DIRECTINVEST_DETAIL', 'data']);
	    return {
	        user: userData && userData.data || {},
	        detail: detail && detail.data || {},
	        couponsFetching: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'pending']),
	        couponsData: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data']),
	        buyPending: state.infodata.getIn([actionTypes.NEW_DIRECTINVEST_BUY, 'pending']),
	        buyData: state.infodata.getIn([actionTypes.NEW_DIRECTINVEST_BUY, 'data']),
	        carBuyData: state.infodata.getIn([actionTypes.NEW_CARD_BUY, 'data']),
	        selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
	        useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon']),
	        use: state.infodata.getIn(['DIRECT_INVEST_COUPON', 'data']),
	        banks: state.infodata.getIn(['GET_MY_CARD_LIST', 'data']),
	        verifyData: state.infodata.getIn(['PAY_VERIFY', 'data']),
	        cardVerifyData: state.infodata.getIn(['CARD_PAY_VERIFY', 'data']),
	        goBankData: state.infodata.getIn(['GO_BANK_PAGE', 'data'])
	    };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        getDirectInvestDetail: function getDirectInvestDetail(id) {
	            dispatch({
	                type: actionTypes.DIRECTINVEST_DETAIL,
	                params: [id]
	            });
	        },
	        getUser: function getUser() {
	            dispatch({ type: actionTypes.USER_INFO });
	        },
	        getAvailableCoupons: function getAvailableCoupons(month) {
	            dispatch({
	                type: actionTypes.AVAILABLE_COUPONS,
	                params: ['直投', month]
	            });
	        },
	        getUse: function getUse(id) {
	            dispatch({
	                type: actionTypes.DIRECT_INVEST_COUPON,
	                params: [id]
	            });
	        },
	        goBankPage: function goBankPage(_ref) {
	            var _ref2 = _slicedToArray(_ref, 1);
	
	            var data = _ref2[0];
	
	            dispatch({
	                type: actionTypes.GO_BANK_PAGE,
	                param: [data]
	            });
	        },
	        push: function push(path) {
	            dispatch((0, _reactRouterRedux.push)(path));
	        },
	        goBack: function goBack() {
	            dispatch((0, _reactRouterRedux.goBack)());
	        },
	        balancePay: function balancePay(productId, num, password, passwordFactor, couponId, device, mapKey) {
	            dispatch({
	                type: actionTypes.NEW_DIRECTINVEST_BUY,
	                params: [{
	                    productId: productId,
	                    num: num,
	                    password: password,
	                    passwordFactor: passwordFactor,
	                    couponId: couponId,
	                    productType: 'DIRECT',
	                    device: device,
	                    mapKey: mapKey
	                }]
	            });
	        },
	        cardPay: function cardPay(bankCard, transferAmount, productId, num, password, passwordFactor, couponId, device, mapKey) {
	            dispatch({
	                type: actionTypes.NEW_CARD_BUY,
	                params: [{
	                    bankCard: bankCard,
	                    transferAmount: transferAmount,
	                    productId: productId,
	                    num: num,
	                    password: password,
	                    passwordFactor: passwordFactor,
	                    couponId: couponId,
	                    productType: 'DIRECT',
	                    device: device,
	                    mapKey: mapKey
	                }]
	            });
	        },
	        payVerify: function payVerify(id) {
	            dispatch({
	                type: 'PAY_VERIFY',
	                params: [id]
	            });
	        },
	        cardPayVerify: function cardPayVerify(id) {
	            dispatch({
	                type: 'CARD_PAY_VERIFY',
	                params: [id]
	            });
	        },
	        setUseCoupons: function setUseCoupons(selectedCoupon) {
	            dispatch({
	                type: actionTypes.SET_USE_COUPONS,
	                selectedCoupon: selectedCoupon
	            });
	        },
	        clear: function clear() {
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'NEW_CARD_BUY'
	            });
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'NEW_DIRECTINVEST_BUY'
	            });
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'PAY_VERIFY'
	            });
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'CARD_PAY_VERIFY'
	            });
	        },
	        clearData: function clearData() {
	            dispatch({
	                type: 'CLEAR_CONPONS'
	            });
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'AVAILABLE_COUPONS'
	            });
	            dispatch({
	                type: 'CLEAR_INFO_DATA',
	                key: 'DIRECT_INVEST_COUPON'
	            });
	            //dispatch({
	            //    type:'CLEAR_INFO_DATA',
	            //    key:'GET_MY_CARD_LIST'
	            //})
	            //dispatch({
	            //    type:'CLEAR_INFO_DATA',
	            //    key:'DIRECTINVEST_DETAIL'
	            //})
	        },
	        getMyBankCards: function getMyBankCards() {
	            dispatch({
	                type: 'GET_MY_CARD_LIST'
	            });
	        }
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _pageWrapper2.default)(DirectBuy));

/***/ },

/***/ 1120:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _directBuy = __webpack_require__(936);
	
	var _directBuy2 = _interopRequireDefault(_directBuy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _directBuy2.default; /**
	                                        * Created by Administrator on 2017/5/2.
	                                        */

/***/ }

});