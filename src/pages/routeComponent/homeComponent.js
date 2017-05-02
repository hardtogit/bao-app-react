/**
 * Created by Administrator on 2017/5/2.
 */
import React from 'react'
import productIndex from '../routes/home/productIndex'
import Bundle from '../bundle'
export const ProductIndex=(props)=>{
    return<Bundle load={productIndex}>
        {(ProductIndex)=><ProductIndex {...props}/>}
    </Bundle>
};