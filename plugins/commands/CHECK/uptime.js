const config = {
  name: "upt",
  aliases: ["time"],
  version: "1.0.0",
  description: "uptime",
  usage: "[]",
  credits: "XIE"
}

function getCurrentTimeInVietnam() {
  const vietnamTimezoneOffset = 7;
  const currentDate = new Date();
  const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
  const vietnamTime = new Date(utcTime + (3600000 * vietnamTimezoneOffset));

  const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
  const day = daysOfWeek[vietnamTime.getDay()];
  const dateString = `${day} - ${vietnamTime.toLocaleDateString('vi-VN')}`;
  const timeString = vietnamTime.toLocaleTimeString('vi-VN');

  return `${dateString} - ${timeString}`;
}

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const currentTimeInVietnam = getCurrentTimeInVietnam();
    const replyMessage = await message.send(`•𝑊𝑒𝑙𝑐𝑜𝑚𝑒 𝑇𝑜 𝑀𝑦 𝑃𝑟𝑜𝑓𝑖𝑙𝑒🌠 𝙷𝚎𝚕𝚕𝚘,    𝚆𝚘𝚛𝚕𝚍!.... 🥽🎣      
 ✎• 𝘽𝙪𝙛𝙛 𝙁𝙤𝙡𝙡𝙤𝙬                                                   ✎•𝐶𝑢𝑛𝑔 𝐶𝑎̂́𝑝 𝐵𝑜𝑡 𝑊𝑎𝑟✎                                            •☎️𝙑𝙞𝙖 𝙏𝙞𝙩𝙞𝙠 𝘾𝙡𝙤𝙣𝙚 𝙁𝗕
•📲𝗡𝗵𝗮̣̂𝗻 𝘁𝗿𝗲𝗼 𝗯𝗼𝘁 𝟮𝟰/𝟳 
📣————————•————————💤                            
‼️ 𝑀𝑦 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛 ‼️💫𝘽𝙤𝙧𝙣 𝙞𝙣: 2⃟0⃟0⃟5⃟                          𝙉𝙖𝙢𝙚: 𝐃𝐨𝐚̃𝐧 𝐓𝐫𝐚̂̀𝐧 𝐁𝐚̉𝐨 𝐇𝐮𝐲  ☀️〽️
𝙎𝙚𝙭: 𝙈𝙖𝙡𝙚🌲
#𝗛𝗼𝘁 𝘄𝗮𝗿 
🎆————————//————————🎆 𝐅𝗿𝗼𝗺 : 📚 Hà Nội 
©𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝗕𝘆 : 𝐁𝐚𝐨 𝐇𝐮𝐲  太阳☀️ 💢
𝐄𝐦𝐚𝐢𝐥 :  Huydoan633@gmail.com  
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/doantranbaohuydz.it               
#𝐼 𝑤𝑜𝑢𝑙𝑑 𝑙𝑖𝑘𝑒 𝑡𝑜 𝑡ℎ𝑎𝑛𝑘 𝑒𝑣𝑒𝑟𝑦𝑜𝑛𝑒 𝑓𝑜𝑟 𝑡ℎ𝑒𝑖𝑟 𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡.\n◘ Thời gian đã onl\n╰┈➤ ${hours} giờ ${minutes} phút ${seconds} giây\n◘ Thời gian hiện tại\n╰┈➤ ${currentTimeInVietnam}`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};
