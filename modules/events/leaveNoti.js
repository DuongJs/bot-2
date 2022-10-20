module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",//mod lại by Tòn
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveMp4");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveMp4", "randommp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const iduser = event.logMessageData.leftParticipantFbId;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự ý rời khỏi nhóm" : "bị quản trị viên kick khỏi nhóm";
	const path = join(__dirname, "cache", "leaveMp4");
	const gifPath = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg ="Vào Buổi {session}\n━━━━━━━━━━━━\n→ {name} đã {type}\n━━━━━━━━━━━━\n→ URL Facebook:\nfacebook.com/{iduser}\n━━━━━━━━━━━━\n→ Tạm biệt {name} ❤️\n\n  " + time : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type)
  .replace(/\{iduser}/g, iduser).replace(/\{session}/g, hours <= 10 ? "Sáng" : 
    hours > 10 && hours <= 12 ? "Trưa" :
    hours > 12 && hours <= 18 ? "Chiều" : "Tối");

	const randomPath = readdirSync(join(__dirname, "cache", "leaveMp4", "randommp4"));
  
	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveMp4", "randommp4", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}