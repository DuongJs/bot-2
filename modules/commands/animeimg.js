module.exports.config = {
	name: "imganime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tiadal",
	description: "Random ảnh anime",
	commandCategory: "Random-IMG",
	usages: "imganime",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://tuandz.herokuapp.com/images/anime').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/shiba.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/shiba.${ext}`)).on("close", callback);
			})
}