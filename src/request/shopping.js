/**
 * Created by wangdongfang on 17/3/2.
 */
const requests=(Fetch)=>{
    Fetch.shopProductList=(page,pageSize = 10,activityId = 2,tagId)=>{
        let Tag=''
        if (tagId){
            Tag='&tagId='+tagId
        }
        return Fetch(`mall/product-list?page=${page}&pageSize=${pageSize}${Tag}`, 'GET')
    },
    Fetch.shopProductBar=(activityId = 1)=>{
        return Fetch(`activity/product-tag-list?activityId=${activityId}`, 'GET')
    }
    Fetch.commodityDetails=(id)=>{
        return Fetch(`mall/product-info?productId=${id}`,'GET')
    },
    Fetch.productExchange=(id,addressId)=>{
        return Fetch (`mall/product-exchange?productId=${id}&addressId=${addressId}`,'GET')
    },
    Fetch.productExchangeRecord=(page)=>{
        return Fetch(`mall/product-exchange-record?page=${page}`,'GET')
    },
    Fetch.voucherList=(page)=>{
        return Fetch(`voucher/list?page=${page}`,'GET')
    }
};


export default requests