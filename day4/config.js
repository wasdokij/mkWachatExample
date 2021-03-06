const path = require('path');
const util = require('./libs/util');
const wechat_txt = path.join(__dirname, './config/wechat.txt');

const config = {
    wechat: {
        appID: 'wxfad1f2a72bcbabd5',
        appSecret: '537855617a4dcda24f42dd66677a9290',
        token: 'langge',
        getAccessToken: () => {
            return util.readFileAsync(wechat_txt)
        },
        saveAccessToken: (data) => {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_txt, data)
        }
    }
};
module.exports = config;