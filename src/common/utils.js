import Timeago from 'timeago.js';


exports.getLastTimeStr = (time) => {
    var str = '';
    if (time !== null && time !== '') {
        let timeagoInstance = new Timeago();
        let timeTrans = new Date (time*1000)
        str = timeagoInstance.format(timeTrans, 'zh_CN');
    }
    return str;
};