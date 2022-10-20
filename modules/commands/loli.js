module.exports.config = {
	name: "loli",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh gái xinh loli",
	commandCategory: "Random-IMG",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://tuandz.herokuapp.com/images/loli').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `𝗔̉𝗻𝗵 𝗹𝗼𝗹𝗶 𝗰𝘂̛̣𝗰 𝗰𝘂𝘁𝗲 ><`,
						attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/loli.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback);
			})
}