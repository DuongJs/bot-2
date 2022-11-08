module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "prefix.gif")) request("https://data.whicdn.com/images/286576497/original.gif").pipe(fs.createWriteStream(dirMaterial + "prefix.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Bất ngờ chưa ${name} đây là dấu lệnh của bot này : /\n Nếu bạn cần giúp đỡ về lệnh hãy dùng /menu + lệnh để xem cách dùng`,
                attachment: fs.createReadStream(__dirname + `/noprefix/prefix.gif`)
            }
    if (event.body.toLowerCase() == "lệnh đâu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "dùng sao"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chỉ dùng với"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lệnh là gì"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "prefix"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage( " \_/) ( •_•) // >🧠  nè lắp vào mà dùng cho bớt ngu rồi hãy sài bot nha bro.",event.threadID)
    } 
