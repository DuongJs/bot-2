module.exports.config = {
	name: "waif",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "dun",
	description: "Random ảnh",
	commandCategory: "Random-img",
	usages: "bống",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.waifu.pics/sfw/waifu').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`)).on("close", callback);
			})
                          }
