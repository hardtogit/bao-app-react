/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import findNotify from '../routes/find/findNotify'
import shoppingMall from '../routes/find/shoppingMall'
import shopProductList from '../routes/find/productList'
import memberCenter from '../routes/find/memberCenter'
import moreBasic from '../routes/find/moreBasic'
import help from '../routes/find/help'
import ticketRule from '../routes/find/ticketRule'
import rateTicketRule from '../routes/find/rateTicketRule'
import inviteFriends from '../routes/find/inviteFriends'
import announceMent from '../routes/find/announceMent'
import messageDetail from '../routes/find/messageDetail'
import messages from '../routes/find/messages'
import Bundle from '../bundle'
export const FindNotify=(props)=>{
    return<Bundle load={findNotify}>
        {(FindNotify)=><FindNotify {...props}/>}
    </Bundle>
};
export const TicketRule=(props)=>{
    return<Bundle load={ticketRule}>
        {(TicketRule)=><TicketRule {...props}/>}
    </Bundle>
};
export const RateTicketRule=(props)=>{
    return<Bundle load={rateTicketRule}>
        {(RateTicketRule)=><RateTicketRule {...props}/>}
    </Bundle>
};
export const Messages=(props)=>{
    return<Bundle load={messages}>
        {(Messages)=><Messages {...props}/>}
    </Bundle>
};
export const MemberCenter=(props)=>{
    return<Bundle load={memberCenter}>
        {(MemberCenter)=><MemberCenter {...props}/>}
    </Bundle>
};
export const ShopProductList=(props)=>{
    return<Bundle load={shopProductList}>
        {(ShopProductList)=><ShopProductList {...props}/>}
    </Bundle>
};
export const MoreBasic=(props)=>{
    return<Bundle load={moreBasic}>
        {(MoreBasic)=><MoreBasic {...props}/>}
    </Bundle>
};
export const ShoppingMall=(props)=>{
    return<Bundle load={shoppingMall}>
        {(ShoppingMall)=><ShoppingMall {...props}/>}
    </Bundle>
};
export const Help=(props)=>{
    return<Bundle load={help}>
        {(Help)=><Help {...props}/>}
    </Bundle>
};
export const InviteFriends=(props)=>{
    return<Bundle load={inviteFriends}>
        {(InviteFriends)=><InviteFriends {...props}/>}
    </Bundle>
};
export const AnnounceMent=(props)=>{
    return<Bundle load={announceMent}>
        {(AnnounceMent)=><AnnounceMent {...props}/>}
    </Bundle>
};
export const MessageDetail=(props)=>{
    return<Bundle load={messageDetail}>
        {(MessageDetail)=><MessageDetail {...props}/>}
    </Bundle>
};