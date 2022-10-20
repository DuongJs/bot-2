module.exports.config = {
    name: "pin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tìm kiếm hình ảnh",
    commandCategory: "Công Cụ",
    usages: "[Text]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage('Vui lòng nhập theo định dạng: từ khóa cần tìm kiếm - số ảnh cần tìm', event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`https://tuandz.herokuapp.com/pinterest?search=${encodeURIComponent(keySearchs)}`);
    const data = res.data.data;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: '=== [ 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 ] ===\n━━━━━━━━━━━\n' + numberSearch + ' 𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐚̉𝐧𝐡 𝐭𝐫𝐞̂𝐧 𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐜𝐮̉𝐚 𝐭𝐮̛̀ 𝐤𝐡𝐨́𝐚 🌸: '+ keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};