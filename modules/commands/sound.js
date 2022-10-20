const fs = require('fs');
const axios = require('axios');
async function getData(url) {
    var { data } = await axios(`https://api.phamvandien.xyz/soundcloud?url=${encodeURI(url)}`);
    return data
}

async function search(keywords, limit) {
    var { data } = await axios.get(`https://api.phamvandien.xyz/soundcloud?search=${encodeURI(keywords)}&limit=${limit || 6}`);
    return data
}
module.exports.config = {
    name: "sound",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát nhạc thông qua link soundcloud hoặc từ khoá tìm kiếm",
    commandCategory: "Tiện ích",
    usages: "[searchMusic]",
    cooldowns: 0
};
module.exports.handleReply = async function ({ api, event, handleReply }) {
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await getData(handleReply.link[event.body -1]);
        data.timestart = Date.now()
        await global.utils.downloadFile(data.dataMusic.linkDownload[1].url, path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗴𝘂̛̉𝗶 𝗳𝗶𝗹𝗲 𝘃𝗶̀ 𝗱𝘂𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝟮𝟱𝗠𝗕.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `🔊=== [ 𝐒𝐎𝐔𝐍𝐃 𝐂𝐋𝐎𝐔𝐃 ] ===🔊\n\n🎵 𝗕𝗮̀𝗶 𝗵𝗮́𝘁: ${data.dataMusic.title}\n⏱️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝗴𝗶𝗮̂𝘆`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage('» 𝗣𝗵𝗮̂̀𝗻 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗯𝗼̉ 𝘁𝗿𝗼̂́𝗻𝗴 !', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await getData(args.join(" "));
            data.timestart = Date.now()
            await global.utils.downloadFile(data.dataMusic.linkDownload[1].url, path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `🔊=== [ 𝐒𝐎𝐔𝐍𝐃 𝐂𝐋𝐎𝐔𝐃 ] ===🔊\n\n🎵 𝗕𝗮̀𝗶 𝗵𝗮́𝘁: ${data.dataMusic.title}\n⏱️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝗴𝗶𝗮̂𝘆`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const data = await search(args.join(" "), 6);
            for (let value of data) {
              link.push(value.dataMusic.permalink_url);
              num = num+=1
              msg += (`${num} - ${value.dataMusic.title}\n`);
            }
            var body = `🔊=== [ 𝐒𝐎𝐔𝐍𝐃 𝐂𝐋𝐎𝐔𝐃 ] ===🔊\n\n»🔎 𝗖𝗼́ [${link.length}] 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:\n\n${msg}\n» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲(𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
}