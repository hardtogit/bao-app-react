/**
 * find request interface
 */

const requests = (Fetch) => {
  // 活动列表
  Fetch.activities = () => { return Fetch('activities', 'GET') }
  // 我的消息列表/站内列表
  Fetch.messages = (page,type) => { return Fetch(`messages?page=${page}&type=${type}`, 'GET') }

  Fetch.notice = (page) => { return Fetch(`messages?page=${page}&type=2`, 'GET') }
  // 清空消息列表
  Fetch.messageClear = (data) => { return Fetch('messages/clear', 'POST', data) }
  // 邀请页详情数据
  Fetch.inviteDetail = () => { return Fetch('invite/detail', 'GET') }
  // 获取未读消息
  Fetch.getMessagesUnread = () => { return Fetch('messages/unread-count', 'GET') }
  // 消息未读设置为已读
  Fetch.setRead = (data) => {return Fetch('messages/set-read', 'POST', data)}
}

export default requests
