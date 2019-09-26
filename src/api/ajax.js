/**
 * 请求封装
 */
import axios from 'axios';
const qs = require('qs');
export default function ajax(url, data = {}, type = 'get') {
    let uploadData,
        formData = new FormData();
    switch (type) {
        case 'get':
            uploadData = '?' + qs.stringify(data);
            break;
        case 'post':
            uploadData = data;
            break;
        case 'form':
            let list = {},
                arr = Object.keys(data);
            for (let i = 0; i < arr.length; i++) {
                formData.append(arr[i], data[arr[i]]);
            }
            uploadData = formData;
            break;
        default:
            break;
    }

    return new Promise((reslove, reject) => {
        axios({
                method: type == 'form' ? type = 'post' : type = type,
                url,

                data: uploadData,
            })
            .then(r => {
                reslove(r.data);
            })
            .catch(e => {});
    });
}