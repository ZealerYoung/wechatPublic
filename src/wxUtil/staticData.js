const appid = '';
//获取code的页面，也就是getCode.vue这个页面的访问路径，然后通过了转码,当项目启动，
// 进入login页面后，就会自动执行生命周期函数里面的代码，页面就会跳转到getCode.vue页面。
const redirect_uri = '';
export const weixin = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect`