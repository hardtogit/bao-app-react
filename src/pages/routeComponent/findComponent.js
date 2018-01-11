/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import findMessage from '../routes/find/findMessage'
import inviteFriends from '../routes/find/inviteFriends'
import announceMent from '../routes/find/announceMent'
import messageDetail from '../routes/find/messageDetail'
import preheat from '../routes/find/preheat'
import preheatConfirm from '../routes/find/preheatConfirm'
import Bundle from '../bundle'
export const FindMessage=(props)=>{
    return<Bundle load={findMessage}>
        {(FindMessage)=><FindMessage {...props}/>}
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
export const Preheat=(props)=>{
    return<Bundle load={preheat}>
        {(Preheat)=><Preheat {...props}/>}
    </Bundle>
};
export const PreheatConfirm=(props)=>{
    return<Bundle load={preheatConfirm}>
        {(PreheatConfirm)=><PreheatConfirm {...props}/>}
    </Bundle>
};