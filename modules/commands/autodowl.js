var configCommand = {
    name: 'autourl',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = require('tools-fb'),
path = __dirname+'/cache/statusAuto.json';

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/((story\.php|\w+\.\w+)(\?|\/))?(story_fbid=|\w+\/)/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `Tiêu Đề: ${data.title}.\n- Lượt Thích: ${data.digg_count}.\n- Lượt Bình Luận: ${data.comment_count}\n- Lượt Chia Sẻ: ${data.share_count}\n- Lượt Tải: ${data.download_count}\n\n=> Thả cảm xúc 🆘 để tải nhạc.`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: 'autourl', messageID: dataMsg.messageID, url_audio: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://api.nambsls.repl.co/youtube/downloader?url=${el}`)).data.data,
            info = (a, b) => `Tiêu Đề: ${a.title}\n- Thời Lượng: ${a.duration}`;
            if (data.video.size < 26214400)out({
                body: (info(data, data.video.size))+'\n\n=> Thả cảm xúc 🆘 để tải nhạc.'+`Youtube`, attachment: await streamURL(data.video.url, 'mp4')}, '', (err, datMsg) => global.client.handleReaction.push({
                    name: 'autourl', messageID: datMsg.messageID, url_audio: data.music.url
                })); else if (data.music.size < 26214400)out({
                body: (info(data))+`Facebook`, attachment: await streamURL(data.music.url, 'mp3')});
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
        if (el.includes('facebook.com/story.php') || regEx_facebook.test(el)) out({
            body: '=> Thả cảm xúc 🆘 để gửi âm thanh.', attachment: await streamURL(((fdl = await toolsFb.getVideoUrl(el)), fdl.HD), 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                name: 'autourl', messageID: dataMsg.messageID, url_audio: fdl.audio
            }));
        /* END */
    };
};

/* TỰ ĐỘNG TẢI VIDEO FACEBOOK 
        if (regEx_facebook.test(el)) out({
            attachment: await streamURL((fdl = (await axios.get(`https://api.nambsls.repl.co/facebook/downloader?url=${el}`)).data.data, fdl.video.hd), 'mp4'), body: `- Tiêu Đề: ${fdl.title}\n______\n=> Thả cảm xúc để tải nhạc.`
        }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: fdl.music.url || fdl.video.sd
            }));
         END */

async function reactionMsg(arg) {
  if(arg.event.reaction == '🆘') {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url_audio'in _) out({
        body: `Âm thanh từ video.`, attachment: await streamURL(_.url_audio, 'mp3')}, '', '', _.messageID);
}
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'bật': 'tắt')+' '+configCommand.name);
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};
