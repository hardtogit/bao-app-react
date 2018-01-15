const requests = (Fetch) => {
  // 商品列表
  // Fetch.getGoodsList = () => {return Fetch(`api/userVip/goodsList?area_type_id=26`, 'GET')};
  //商品类型列表
  Fetch.getGoodsTypeList = () => {return Fetch(`api/userVip/typeList`, 'GET')};
    // 商品列表
  Fetch.getGoodsList=(page,page_size = 10,area_type_id)=>{
      let Tag='';
      if (area_type_id){
          Tag='&area_type_id='+area_type_id
      }
      return Fetch(`api/userVip/goodsList?page=${page}&page_size=${page_size}${Tag}`, 'GET')
  };
    //点币记录
    Fetch.getCoinRecordList = () => {return Fetch(`api/userVip/coinList`, 'GET')};
    //兑换记录
    Fetch.getCashRecordList = () => {return Fetch(`api/userVip/cashList`, 'GET')};
    //兑换详情
    Fetch.getCashDetail = (id) => {return Fetch(`api/userVip/cashInfo?id=${id}`, 'GET')};
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
    Fetch.setAddress = (id,isDefault) => {return Fetch(`api/userVip/setAddress?address_id=${id}&is_default=${isDefault}`, 'GET')};

}

export default requests
