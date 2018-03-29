/**
 * Created by xiangguo .
 * time:2018/3/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
//发现页消息
export const FindNotify  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/notify').default);
    }, 'FindNotify');
},
    //商城首页
ShoppingMall  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall').default);
    }, 'ShoppingMall');
},
    //会员中心
MemberCenter  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/memberCenter').default);
    }, 'MemberCenter');
},
    //商品列表
ShopProductList  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall/productList').default);
    }, 'ShopProductList');
},
    //历史记录
ShopHistoryRecord  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall/shopHistoryRecord').default);
    }, 'ShopHistoryRecord');
},
    //商城通知
ShopMessage  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall/shopMessage').default);
    }, 'ShopMessage');
},
    //商城通知详情
ShopMessageDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall/shopMessageDetail').default);
    }, 'ShopMessageDetail');
},
    //兑换详情
    CashDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/shoppingMall/cashDetail').default);
    }, 'CashDetail');
},
    //更多基础特权
    MoreBasic  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/moreBasic').default);
    }, 'MoreBasic');
},
    //商城帮助
    Help  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/help').default);
    }, 'Help');
},
    //券的领取规则
    TicketRule  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/ticketRule').default);
    }, 'TicketRule');
},
    //券的领取规则
    RateTicketRule  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/rateTicketRule').default);
    }, 'RateTicketRule');
},
    //券的详情
    TicketDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/ticketDetail').default);
    }, 'TicketDetail');
},
    //消息
    Messages  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/messages').default);
    }, 'Messages');
},
    //消息
    AnnounceMent  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/announcement').default);
    }, 'AnnounceMent');
},
    //消息
    MessageDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/messageDetail').default);
    }, 'MessageDetail');
},
    //新春预热
    Preheat  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/wechatPreheat').default);
    }, 'Preheat');
},
    //新春预热确认领取
    PreheatConfirm  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/wechatPreheat/preheatConfirm').default);
    }, 'PreheatConfirm');
},
    //邀请好友
    InviteFriends  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/invite').default);
        }, 'InviteFriends');
    },
    //邀请规则
    InviteRule  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/invite/inviteRule').default);
    }, 'InviteRule');
},
    //邀请计算器
    InviteParticulars  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/invite/particulars').default);
    }, 'InviteParticulars');
},
//会员基础特权
BasicPrivaligeDetail  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/find/basicPrivaligeDetail').default);
    }, 'BasicPrivaligeDetail');
},
    //会员整体规则
    OverallRule  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/overallRule').default);
        }, 'OverallRule');
    },
    //热门活动
    HotActivity  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/hotActivity').default);
        }, 'HotActivity');
    },
//地址
    Address  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/address').default);
        }, 'Address');
    },
    //编辑地址
    EditAddress  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/editAddress').default);
        }, 'EditAddress');
    },
    //新增地址
    AddAddress  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/addAddress').default);
        }, 'AddAddress');
    },
    //产品详情
    ProductDetail  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/productDetail').default);
        }, 'ProductDetail');
    },
    //产品兑换
    ProductCash  = (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../pages/find/productCash').default);
        }, 'ProductCash');
    }

