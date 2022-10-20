module.exports.config = {
	name: "ping",
	version: "0.0.3",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Tag toàn bộ thành viên trong nhóm",
	commandCategory: "Box chat",
	usages: "< nội dung >",
	cooldowns: 20
};

module.exports.run = async function({ api, event, args, Threads }) { 
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ 2'
  if (thu == 'Tuesday') thu = 'Thứ 3'
  if (thu == 'Wednesday') thu = 'Thứ 4'
  if (thu == "Thursday") thu = 'Thứ 5'
  if (thu == 'Friday') thu = 'Thứ 6'
  if (thu == 'Saturday') thu = ' Thứ 7'
const res = await axios.get("https://tuandz.herokuapp.com/images/girl");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
	  all.splice(all.indexOf(event.senderID), 1);
		var body = (args.length != 0) ? args.join(" "):"𝗗𝗮̣̂𝘆 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗮̀𝗼 𝗺𝗮̂́𝘆 𝗰𝗼𝗻 𝗹𝗼̛̣𝗻 🐷", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length );
		    mentions.push({
		  	  tag: body,
		  	  id: all[i],
		  	  fromIndex: i
		    });
	    }

		return api.sendMessage({ body: `📣===[ 𝙌𝙏𝙑 𝙏𝙝𝙤̂𝙣𝙜 𝘽𝙖́𝙤 ]===📣\n\n[💬] 𝙉𝙤̣̂𝙞 𝙙𝙪𝙣𝙜: ${body}\n\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}\n━━━━━━━━━━━━\n🌸 𝘽𝙤𝙩 𝙆𝙖𝙞𝙙𝙤 🌸`, attachment: download, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}