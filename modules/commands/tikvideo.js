module.exports.config = {
    name: "tikvideo",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "",
    description: "",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
  try{
    const axios = global.nodemodule["axios"];
  const res = await axios.post('https://www.tikwm.com/api/', {
                url: args[0],
                count: 12,
                cursor: 0,
                hd: 1
        });
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status);
          const k = res.data
             const t = (await axios.get(`${k.data.play}`, { responseType: "stream" })).data;
    return api.sendMessage({ 
      body: `== [ 𝙏𝙞𝙠𝙩𝙤𝙠 𝙑𝙞𝙙𝙚𝙤 ] ==\n━━━━━━━━━━━━━━━━━━\n📄➝ 𝙉𝙤̣̂𝙞 𝙙𝙪𝙣𝙜: ${k.data.title}\n💿➝ 𝙏𝙚̂𝙣 𝙆𝙚̂𝙣𝙝: ${k.data.author.nickname} \n♥️➝ 𝙏𝙞𝙢: ${k.data.digg_count}\n👀➝ 𝙇𝙪̛𝙤̛̣𝙩 𝙓𝙚𝙢: ${k.data.play_count}\n`,
      attachment: t
    }, event.threadID)
  }
  }
    catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi từ api", event.threadID);
}        
}