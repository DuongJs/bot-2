module.exports.config = {
  name: "ganyu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh ganyu",
  commandCategory: "Random-IMG",
  usages: "ganyu",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/5B40CPB.jpeg",
"https://i.imgur.com/vCPrVfx.jpeg",
"https://i.imgur.com/B2N9LRU.jpeg",
"https://i.imgur.com/m354Pmf.jpeg",
"https://i.imgur.com/vgAacwZ.jpeg",
"https://i.imgur.com/vKgjQ7m.jpeg",
"https://i.imgur.com/h8mKG8t.jpeg",
"https://i.imgur.com/0JX77ps.jpeg",
"https://i.imgur.com/ELUALap.jpeg",
"https://i.imgur.com/uKv5UG9.jpeg",
"https://i.imgur.com/GxE4eZu.jpeg",
"https://i.imgur.com/txUR2zp.jpeg",
"https://i.imgur.com/q8nEcO7.jpeg",
"https://i.imgur.com/rfmq44F.jpeg",
"https://i.imgur.com/CY0YxOg.jpeg",
"https://i.imgur.com/b3GjyXI.jpeg",
"https://i.imgur.com/uz2qDt8.jpeg",
"https://i.imgur.com/513JHGD.jpeg",
"https://i.imgur.com/XJL6eMS.jpeg",
"https://i.imgur.com/3o2p4im.jpeg",
"https://i.imgur.com/5IAgkoR.jpeg",
"https://i.imgur.com/ROgs4KA.jpeg",
"https://i.imgur.com/ica8w7D.jpeg",
"https://i.imgur.com/J13XaP3.jpeg",
"https://i.imgur.com/REvUpuh.jpeg",
"https://i.imgur.com/gCo5yyP.jpeg",
"https://i.imgur.com/IUvM8t1.jpeg",
"https://i.imgur.com/WpTM9SQ.jpeg",
"https://i.imgur.com/GuZBbI6.png",
"https://i.imgur.com/zOcoFM1.jpeg",
"https://imgur.com/gallery/4IAJB8M",
"https://i.imgur.com/F88Yulq.png",
"https://i.imgur.com/Adez2FW.jpeg",
"https://i.imgur.com/2YMzkb6.jpeg",
"https://i.imgur.com/4PE8pHE.jpeg",
"https://i.imgur.com/tRPU2x7.jpeg",
"https://i.imgur.com/6RDQtCI.jpeg",
"https://i.imgur.com/i47DZiE.jpeg",
"https://i.imgur.com/44Av0Zg.jpeg",
"https://i.imgur.com/K7sgkZT.jpeg",
"https://i.imgur.com/7QHkaNv.jpeg",
"https://i.imgur.com/7nBB0OZ.jpeg",
"https://i.imgur.com/cCKUnZd.jpeg",
"https://i.imgur.com/9vpr4lr.jpeg",
"https://i.imgur.com/IbNM5A4.png",
"https://i.imgur.com/XnPLIW7.jpeg",
"https://i.imgur.com/UgLJy1C.jpeg",
"https://i.imgur.com/mczkMqU.jpeg",
"https://i.imgur.com/Bd984ik.jpeg",
"https://i.imgur.com/5jBj4ac.jpeg",
"https://i.imgur.com/ulzw7EN.jpeg",
"https://i.imgur.com/cetjuT4.jpeg",
"https://i.imgur.com/HFunJ1t.jpeg",
"https://i.imgur.com/dqfHcVr.jpeg",
"https://i.imgur.com/rzjf3Rf.png",
"https://i.imgur.com/Vma9bsz.jpeg",
"https://i.imgur.com/ya8gKJ6.jpeg",
"https://i.imgur.com/dhJdaPM.jpeg",
"https://i.imgur.com/mMcSfUM.jpeg",
"https://i.imgur.com/ffbAJCL.jpeg",
"https://i.imgur.com/yDw0qrI.jpeg,",
"https://i.imgur.com/xP7ySVX.jpeg",
"https://i.imgur.com/lAuSOcl.jpeg",
"https://i.imgur.com/5Sn2qjx.jpeg",
"https://i.imgur.com/vSqI4IV.jpeg",
"https://i.imgur.com/S2Lqpt0.jpeg",
"https://i.imgur.com/yHdzXPU.jpeg",
"https://i.imgur.com/KQzmHIZ.jpeg",
"https://i.imgur.com/WdVu7IF.jpeg",
"https://i.imgur.com/bam8egw.jpeg",
"https://i.imgur.com/4jwu7LX.jpeg",
"https://i.imgur.com/KE0u02Q.jpeg",
"https://i.imgur.com/FjTycsr.jpeg",
"https://i.imgur.com/0jbY8zP.jpeg",
"https://i.imgur.com/LRKjrgU.jpeg",
"https://i.imgur.com/N6n8C5u.jpeg",
"https://i.imgur.com/iRZnTzt.jpeg",
"https://i.imgur.com/xl2JXWZ.jpeg",
"https://i.imgur.com/pPBKgkB.jpeg",
"https://i.imgur.com/BIYj4o0.jpeg",
"https://i.imgur.com/CK9YYjE.jpeg",
"https://i.imgur.com/bNnrtHa.jpeg",
"https://i.imgur.com/uEYb90T.jpeg",
"https://i.imgur.com/JnPxCFo.jpeg",
"https://i.imgur.com/sjiJHXi.jpeg",
"https://i.imgur.com/drLVAx2.jpeg",
"https://i.imgur.com/e4HA8g4.jpeg",
"https://i.imgur.com/sliglf8.jpeg",
"https://i.imgur.com/IgdqTb3.jpeg",
"https://i.imgur.com/IG8nCQd.jpeg",
"https://i.imgur.com/WWQhtaj.jpeg",
"https://i.imgur.com/920uF2G.jpeg",
"https://i.imgur.com/ZGkefbB.jpeg",
"https://i.imgur.com/Sm2fdQ8.jpeg",
"https://i.imgur.com/qp614Kw.jpeg",
"https://i.imgur.com/k936dAY.jpeg",
"https://i.imgur.com/pwa5RBF.jpeg",
"https://i.imgur.com/nnm9v2p.jpeg",
"https://i.imgur.com/E6IfVmH.jpeg",
"https://i.imgur.com/wydEJYY.jpeg",
"https://i.imgur.com/xaSlj8a.jpeg",
"https://i.imgur.com/T6idcEt.jpeg",
"https://i.imgur.com/xEuDpSy.jpeg",
"https://i.imgur.com/SderS0Y.jpeg",
"https://i.imgur.com/HgSUS24.jpeg",
"https://i.imgur.com/HfDsM9J.jpeg",
"https://i.imgur.com/fUwPPAF.jpeg",
"https://i.imgur.com/wbSk6Ng.jpeg",
"https://i.imgur.com/Kx9BPhF.jpeg",
"https://i.imgur.com/lTT3vlG.jpeg",
"https://i.imgur.com/ra3q29P.jpeg",
"https://i.imgur.com/dym6Bzt.jpeg",
"https://i.imgur.com/3GEtfDe.jpeg",
"https://i.imgur.com/T7IEuaF.jpeg",
"https://i.imgur.com/adUyNmk.jpeg",
"https://i.imgur.com/nsXl2Qi.jpeg",
"https://i.imgur.com/xVypyPr.jpeg",
"https://i.imgur.com/DEhktVn.jpeg",
"https://i.imgur.com/uYooP4k.jpeg",
"https://i.imgur.com/2ie6SqZ.jpeg",
"https://i.imgur.com/rnPpnkm.jpeg",
"https://i.imgur.com/JJfaVHD.jpeg",
"https://i.imgur.com/Id2dftJ.jpeg",
"https://i.imgur.com/iD8vbCn.jpeg",
"https://i.imgur.com/Xt3jMrR.jpeg",
"https://i.imgur.com/gg1JHQC.jpeg",
"https://i.imgur.com/3tT5mFt.jpeg",
"https://i.imgur.com/Fcz26yp.jpeg",
"https://i.imgur.com/NOg91eb.jpeg",
"https://i.imgur.com/moYVluc.jpeg",
"https://i.imgur.com/e2Cmva2.jpeg",
"https://i.imgur.com/Bq3VOT3.jpeg",
"https://i.imgur.com/YKv19TU.jpeg",
"https://i.imgur.com/bQdsHkw.jpeg",
"https://i.imgur.com/sNxUTDB.jpeg",
"https://i.imgur.com/G3RuG4x.jpeg",
"https://i.imgur.com/oDdhfsF.jpeg",
"https://i.imgur.com/eSmZ65j.jpeg",
"https://i.imgur.com/9YkemZn.jpeg",
"https://i.imgur.com/rLiR2ab.jpeg",
"https://i.imgur.com/wAQS6Ij.jpeg",
"https://i.imgur.com/otY2kPF.jpeg",
"https://i.imgur.com/r0RYzqa.jpeg",
"https://i.imgur.com/myS6dw7.jpeg",
"https://i.imgur.com/jDbRAYC.jpeg",
"https://i.imgur.com/qESnFS7.jpeg",
"https://i.imgur.com/WqrxETF.jpeg",
"https://i.imgur.com/s1UGCSn.jpeg",
"https://i.imgur.com/1xO3Wif.jpeg",
"https://i.imgur.com/RBOzfNR.jpeg",
"https://i.imgur.com/JBSbFuI.jpeg",
"https://i.imgur.com/6qe0kqA.jpeg",
"https://i.imgur.com/aaDSrJk.jpeg",
"https://i.imgur.com/4828ly7.jpeg",
"https://i.imgur.com/TkrGZnr.jpeg",
"https://i.imgur.com/cKAntwU.jpeg",
"https://i.imgur.com/OdmhrqV.jpeg",
"https://i.imgur.com/haSjtc4.jpeg",
"https://i.imgur.com/c3SybDV.jpeg",
"https://i.imgur.com/OvJbssz.jpeg",
"https://i.imgur.com/cAo9RIM.jpeg",
"https://i.imgur.com/kGetyYU.jpeg",
"https://i.imgur.com/yOSXmc1.jpeg",
"https://i.imgur.com/SLIA0Xz.jpeg",
"https://i.imgur.com/7s9PfYt.jpeg",
"https://i.imgur.com/7vRqAk5.jpeg",
"https://i.imgur.com/TEhgU2S.jpeg",
"https://i.imgur.com/j2D3zyt.jpeg",
"https://i.imgur.com/6GpMvC4.jpeg",
"https://i.imgur.com/DrnQ4TC.jpeg",
"https://i.imgur.com/YOdf8Cm.jpeg",
"https://i.imgur.com/uXUntQo.jpeg",
"https://i.imgur.com/NcZnlX6.jpeg",
"https://i.imgur.com/jyKoE6v.jpeg",
"https://i.imgur.com/7MLOyAC.jpeg",
"https://i.imgur.com/cU7Hzbt.jpeg",
"https://i.imgur.com/x2hIZhT.jpeg",
"https://i.imgur.com/aSWJodZ.jpeg",
"https://i.imgur.com/gne2wMn.jpeg",
"https://i.imgur.com/sPWJPlz.jpeg",
"https://i.imgur.com/TE0zRSV.jpeg",
"https://i.imgur.com/Epky3Gk.jpeg",
"https://i.imgur.com/jTg35r1.jpeg",
"https://i.imgur.com/N6If5Ut.jpeg",
"https://i.imgur.com/vcqYeRQ.jpeg",
"https://i.imgur.com/HsQ6IvU.jpeg",
"https://i.imgur.com/dT68TId.jpeg",
"https://i.imgur.com/BmxJydj.jpeg",
"https://i.imgur.com/054E6sZ.jpeg",
"https://i.imgur.com/9hxx0tS.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗴𝗮𝗻𝘆𝘂 𝗴𝗲𝗻𝘀𝗵𝗶\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
