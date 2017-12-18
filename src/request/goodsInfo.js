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

}

export default requests
