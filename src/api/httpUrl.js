import globalConfig from 'static/public/globalConfig';
const url = globalConfig.ip + globalConfig.projectName;
export default {
    // 后台登录退出接口
    login: url + '/v1/sys/login', //用户登录
};