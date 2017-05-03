/**
 * Created by Administrator on 2017/5/2.
 */
import React from 'react'
import productIndex from '../routes/home/productIndex'
import findHome from '../routes/home/findHome'
import myIndex from '../routes/home/myIndex'
import Bundle from '../bundle'
export const ProductIndex=(props)=>{
    return<Bundle load={productIndex}>
        {(ProductIndex)=><ProductIndex {...props}/>}
    </Bundle>
};
export const FindHome=(props)=>{
    return<Bundle load={findHome}>
        {(FindHome)=><FindHome {...props}/>}
    </Bundle>
};
export const MyIndex=(props)=>{
    return<Bundle load={myIndex}>
        {(MyIndex)=><MyIndex {...props}/>}
    </Bundle>
};