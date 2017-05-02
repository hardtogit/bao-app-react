/**
 * Created by Administrator on 2017/5/2.
 */
import React from 'react'
import analysis from '../routes/user/analysis'
import calendar from '../routes/user/calendar'
import calendarMonths from '../routes/user/calendarMonths'
import recharge from '../routes/user/recharge'
import moneyLog from '../routes/user/moneyLog'
import myDCB from '../routes/user/myDcb'
import myDCBB from '../routes/user/myDcbb'
import zqRecords from '../routes/user/zqRecords'
import depositRecords from '../routes/user/depositRecords'
import depositRecordsB from '../routes/user/depositRecordsB'
import myDirectProjects from '../routes/user/myDirectProjects'
import projectRecorde from '../routes/user/projectRecorde'
import zqTransferRule from '../routes/user/zqTransferRule'
import scratchesCard from '../routes/user/scratchesCard'
import addAccrualIndex from '../routes/user/addAccrualIndex'
import coinShop from '../routes/user/coinShop'
import Bundle from '../bundle'
export const Analysis=(props)=>{
    return<Bundle load={analysis}>
        {(Analysis)=><Analysis {...props}/>}
    </Bundle>
};
export const Calendar=(props)=>{
    return<Bundle load={calendar}>
        {(Calendar)=><Calendar {...props}/>}
    </Bundle>
};
export const CalendarMonths=(props)=>{
    return<Bundle load={calendarMonths}>
        {(CalendarMonths)=><CalendarMonths {...props}/>}
    </Bundle>
};
export const Recharge=(props)=>{
    return<Bundle load={recharge}>
        {(Recharge)=><Recharge {...props}/>}
    </Bundle>
};
export const MoneyLog=(props)=>{
    return<Bundle load={moneyLog}>
        {(MoneyLog)=><MoneyLog {...props}/>}
    </Bundle>
};
export const MyDCB=(props)=>{
    return<Bundle load={myDCB}>
        {(MyDCB)=><MyDCB {...props}/>}
    </Bundle>
};
export const MyDCBB=(props)=>{
    return<Bundle load={myDCBB}>
        {(MyDCBB)=><MyDCBB {...props}/>}
    </Bundle>
};
export const  ZqRecords=(props)=>{
    return<Bundle load={zqRecords}>
        {(ZqRecords)=><ZqRecords {...props}/>}
    </Bundle>
};
export const  DepositRecords=(props)=>{
    return<Bundle load={depositRecords}>
        {(DepositRecords)=><DepositRecords {...props}/>}
    </Bundle>
};
export const  DepositRecordsB=(props)=>{
    return<Bundle load={depositRecordsB}>
        {(DepositRecordsB)=><DepositRecordsB {...props}/>}
    </Bundle>
};
export const  MyDirectProjects=(props)=>{
    return<Bundle load={myDirectProjects}>
        {(MyDirectProjects)=><MyDirectProjects {...props}/>}
    </Bundle>
};
export const  ProjectRecorde=(props)=>{
    return<Bundle load={projectRecorde}>
        {(ProjectRecorde)=><ProjectRecorde {...props}/>}
    </Bundle>
};
export const  ZqTransferRule=(props)=>{
    return<Bundle load={zqTransferRule}>
        {(ZqTransferRule)=><ZqTransferRule {...props}/>}
    </Bundle>
};
export const  ScratchesCard=(props)=>{
    return<Bundle load={scratchesCard}>
        {(ScratchesCard)=><ScratchesCard {...props}/>}
    </Bundle>
};
export const  AddAccrualIndex=(props)=>{
    return<Bundle load={addAccrualIndex}>
        {(AddAccrualIndex)=><AddAccrualIndex {...props}/>}
    </Bundle>
};
export const  CoinShop=(props)=>{
    return<Bundle load={coinShop}>
        {(CoinShop)=><CoinShop {...props}/>}
    </Bundle>
};


