module.exports.config = {
    name: "gachthe",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "BraSL",
    description: "gạch card = bot, nhớ thay APIKey chỗ phần link",
    commandCategory: "Công Cụ",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐧𝐡𝐚̀ 𝐦𝐚̣𝐧𝐠 !', threadID, messageID)
  else return api.sendMessage(`🔍 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐥𝐨𝐚̣𝐢 𝐭𝐡𝐞̉ 𝐥𝐚̀: ${args.join(" ")}\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐞̣̂𝐧𝐡 𝐠𝐢𝐚́`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
         type: "menhgia",
        name: this.config.name,
        author: senderID,
        nhamang: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
      
    case "menhgia": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐦𝐞̣̂𝐧𝐡 𝐠𝐢𝐚́ 𝐥𝐚̀ ${event.body}\n\n(𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐡𝐚̣̂𝐩 𝐯𝐚̀𝐨 𝐬𝐨̂́ 𝐬𝐞𝐫𝐢)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "seri",
          name: 'gachcard',
        	  	author: senderID,
              nhamang: handleReply.nhamang,
        	  	menhgia: event.body,
            
        	  	messageID: info.messageID
        });
      },messageID)
    }
    case "seri": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐬𝐞𝐫𝐢 𝐥𝐚̀: ${event.body}\n\(𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐦𝐚̃ 𝐭𝐡𝐞̉)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: 'gachcard',
        	  	author: senderID,
                nhamang: handleReply.nhamang,
			    menhgia: handleReply.menhgia,
        	  	seri: event.body,
        	  	messageID: info.messageID
        });
      },messageID) 
    }
    
        case "create": {
              
      var nhamang = handleReply.nhamang;
      
      var menhgia = handleReply.menhgia;
      var seri = handleReply.seri;
          var mathe = event.body;
      
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`⏳ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐛𝐨𝐭 𝐠𝐮̛̉𝐢 𝐭𝐡𝐞̉ 𝐥𝐞̂𝐧 𝐭𝐡𝐨̂́𝐧𝐠 𝐀𝐔𝐓𝐎𝐂𝐀𝐑𝟐𝟕.𝐂𝐎𝐌`,threadID) 
   axios.get(`https://autocard27.com/api/card-auto.php?type=${nhamang}&menhgia=${menhgia}&seri=${seri}&pin=${mathe}&APIKey=b84f7caf348b9a0942b3f1b952461ab7&callback=http://localhost/callback.php&content=1233`).then(res => {
	api.sendMessage(`Trạng thái: ${res.data.data.status}\nNội Dung: ${res.data.data.msg}`, event.threadID,event.messageID);
          });
                 }
        }
    }
 
 
//`https://www.phamvandienofficial.xyz/fbcover/v2?name=${noidung1}&id=${nhanvat}&subname=${noidung2}`