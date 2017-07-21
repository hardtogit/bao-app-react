/**
 * Created by Administrator on 2017/5/2.
 */
import React from 'react'
import depositBuy from '../routes/deposit/depositBuy'
import directBuy from '../routes/deposit/directBuy'
import directInvestDetails from '../routes/deposit/directInvestDetails'
import depositProduct from '../routes/deposit/depositProduct'
import gatherMain from  '../routes/deposit/gatherMain'
import Bundle from '../bundle'
export const DepositBuy=(props)=>{
    return<Bundle load={depositBuy}>
        {(DepositBuy)=><DepositBuy {...props}/>}
    </Bundle>
};
export const DirectBuy=(props)=>{
    return<Bundle load={directBuy}>
        {(DirectBuy)=><DirectBuy {...props}/>}
    </Bundle>
};
export const DirectInvestDetails=(props)=>{
    return<Bundle load={directInvestDetails}>
        {(DirectInvestDetails)=><DirectInvestDetails {...props}/>}
    </Bundle>
};
export const DepositProduct=(props)=>{
    return<Bundle load={depositProduct}>
        {(DepositProduct)=><DepositProduct {...props}/>}
    </Bundle>
};
export const GatherMain=(props)=>{
    return<Bundle load={gatherMain}>
        {(GatherMain)=><GatherMain {...props}/>}
    </Bundle>
};