const configCommand = {
    name: 'autotik',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết video tiktok',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 0
},
axios = require('axios'),
reqStreamURL = async url => (await axios.get(url, {
    responseType: 'stream'
})).data,
statusAuto = {};
async function noprefix(arg) {

    if (!statusAuto[arg.event.threadID] || arg.event.senderID == arg.api.getCurrentUserID()) return;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /https:\/\/((vt)\.)?(tiktok)\.com\//;
    if(arg.event.type == 'message_reply') arr.push(...arg.event.messageReply.args);
    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
          const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;

            out({
               body: `== [ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 ] ==
━━━━━━━━━━━━━━━━━
→ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${data.author.nickname}
→ 𝗨𝗜𝗗: ${data.author.unique_id}
━━━━━━━━━━━━━━━━━━
→ 𝐐𝐮𝐨̂́𝐜 𝐠𝐢𝐚:  ${data.region}
→ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:   ${data.title}
→ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${data.digg_count}
→ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝘂̛𝗼̛̣𝘁 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${data.comment_count}
→ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${data.download_count}
→ 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗮̉𝗶: 
→ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${data.duratinon} 𝗴𝗶𝗮̂𝘆
====== ${time} ======
━━━━━━━━━━━━━━━━━━
→ 𝐍𝐠𝐮̛𝐨̛̀𝐢 Đ𝐢𝐞̂̀𝐮 𝐇𝐚̀𝐧𝐡 𝐁𝐨𝐭: 𝐏𝐡𝐮̀𝐧𝐠 𝐓𝐮𝐚̂́𝐧 𝐇𝐚̉𝐢` ,attachment: await reqStreamURL(data.play)}); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */
    };
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    try {
        s = statusAuto[arg.event.threadID] = !!statusAuto[arg.event.threadID]?false: true;
        out((s?'Bật': 'Tắt')+' '+configCommand.name);
    }catch(e) {
        out(e);
    };
};

module.exports = {
    config: configCommand,
    run: runCommand,
    handleEvent: noprefix
}
