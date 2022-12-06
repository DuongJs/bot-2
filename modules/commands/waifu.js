module.exports.config = {
	name: "waifu",
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
	axios.get('https://api.waifu.pics/nsfw/waifu').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`)).on("close", callback);
			})
                          }
