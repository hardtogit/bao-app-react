const requests = (Fetch) => {
    //商品兑换
    Fetch.findBanner = () => {return Fetch(`api/userVip/userIndexBanner`, 'GET')};
    //商品类型列表
    Fetch.getGoodsTypeList = () => {return Fetch(`api/userVip/typeList`, 'GET')};
    // 商品列表
    Fetch.getGoodsList=(page,data)=>{
        return Fetch(`api/userVip/goodsList?page=${page}`, 'GET',data)
    };
    //点币记录
    Fetch.getCoinRecordList = (page,data) => {
        return Fetch(`api/userVip/coinList?page=${page}`, 'GET',data)
    };
    //兑换记录
    Fetch.getCashRecordList = (page,data) => {return Fetch(`api/userVip/cashList?page=${page}`, 'GET',data)};
    //兑换详情
    Fetch.getCashDetail = (id) => {return Fetch(`api/userVip/cashInfo?id=${id}`, 'GET')};
    //取消兑换
    Fetch.cancelCash = (id) => {return Fetch(`api/userVip/cashReback?id=${id}`, 'GET')};
    //商城通知列表
    Fetch.getNoticeList = () => {return Fetch(`api/userVip/noticeList`, 'GET')};
    //商城通知详情
    Fetch.getNoticeDetail = (id) => {return Fetch(`api/userVip/noticeDetail?id=${id}`, 'GET')};
    //商城帮助问题
    Fetch.getHelpList = () => {return Fetch(`api/userVip/helpList`, 'GET')};
    //热门活动列表
    Fetch.getHotActivityList = () => {return Fetch(`api/userVip/activityList`, 'GET')};
    //地址列表
    Fetch.getAddressList = () => {return Fetch(`api/userVip/listAddress`, 'GET')};
    //设置默认地址
    Fetch.setAddress = (id) => {return Fetch(`api/userVip/setAddress?address_id=${id}&is_default=0`, 'GET')};
    //编辑地址
    Fetch.editAddress = (consignee,phone,address,id,isDefault) => {return Fetch(`api/userVip/edAddress?consignee=${consignee}&phone=${phone}&address=${address}&address_id=${id}&is_default=${isDefault}`, 'GET')};
    //添加新地址
    Fetch.addAddress = (consignee,phone,address,isDefault) => {return Fetch(`api/userVip/addAddress?consignee=${consignee}&phone=${phone}&address=${address}&is_default=${isDefault}`, 'GET')};
    //删除地址
    Fetch.delAddress = (address_id) => {return Fetch(`api/userVip/delAddress?address_id=${address_id}`, 'GET')};
    //商品详情
    Fetch.productDetail = (product_id) => {return Fetch(`api/userVip/goodsDetail?product_id=${product_id}`, 'GET')};
    //商品兑换
    Fetch.cashProduct = (data) => {return Fetch(`api/userVip/cashGoods`, 'GET',data)};
}

export default requests
