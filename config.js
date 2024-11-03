//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/481ntc.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27693798048, 27615045572";
global.owner = process.env.OWNER_NUMBER || "263786430238";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/x1gvh2.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUp4N0JEUHF0b0R0NjFlNWhIbkpFa2VMSUVzeXNvTVpuanZoalE2WmoxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlR1bXhFUkZITFQyMGFBSFEvdDVwMkdhMzJRMGpyTm1tZFJhemtnRytVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTy8yZDdlOGtxbTlibmkzcjJIQTJYZ05VZTR1eXhwT2R3YW5OaThRZDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N3BTNTE4SGN3QUJLMHJFZVZUN0x5Qk5VbDF4M1dUb0RzMGdpaXEyS1E0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHRHBGMHNWUk01T01kK0YrTVRWTU1jWWJHcklGNzg3RHdaMUdKMWplMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMzMnFVdmc5eU1TcExQU0VHK2hHeHJURXVGY1V4ZGZabXlQRmlxOWkrenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJCOHc5Ty9QVUV5QWxyU29TcS9nN0ZwRjNhSDU2OU5ZRHpNdUc2TUcyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnBEQW9VYmpORnVpRTVWa2xqUkhoUVBRN1kzeTZkZ3gxM2Q2RlZDaHpqUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8vNTliL3JQcEVtOFo2OHREdGZjalVFcXBVanFZdTRRMmVTQmVKWW9IcUUySmFOcUVwTFV6RHlWdmxQYVNNSXdnK0JUeGVTSXJCeG1Vb0lRSk5hekNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IkJiaWtRcjhvdXExU2IzT0hmMEFIWU1mMmdRaGY2TTBobkF6N1RTUnF0N3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im0yMElKZDJSUkdTT1lpTW1rXzJVVlEiLCJwaG9uZUlkIjoiZGFjMjQ5N2YtMjYwMC00MzNiLTkyZTEtZWQ3MDY3Y2VlYjhmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrY3VKOWgwZzQrdXB6cFNsSTgzUkVqYUJncz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzaTUxSEdJbFZlZzVsNktDR3FGNC8wU0tyWW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUZNQ01LMVYiLCJtZSI6eyJpZCI6IjI2Mzc4NjQzMDIzODo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMM00zT1VIRU5DdW5ya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYd1hkbEFXUkkyNW5XQUJXOFZtTldSZmZkTlBGamhrdnVkREthQWF2ampzPSIsImFjY291bnRTaWduYXR1cmUiOiI1bXlGN0JiYjN1Uytndks4SzhPZ21zbDRxM3g1aWtHc3dYRDVvU1lZSkk1S2Q5bGcxSWIxbm81MDROQzVhcm94MStiSzlkeHdrTENZeXZZM3FCdkpEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiODI1RFdGYXZmYkxoOWJxL3BVdHFzc0FCWkx2cmZPbU5MbDJoQkdMM2MxOVQybVk1NlVsZCtGNUNjWFdvNHpCOTlPWkduWnRCS1g2YVJ1eExaRE9VQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODY0MzAyMzg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOEYzWlFGa1NOdVoxZ0FWdkZaalZrWDMzVFR4WTRaTDduUXltZ0dyNDQ3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjQ3OTAxfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`🧸❤️the-chucky-X-cylee-bot❤️🧸™`",
  author: process.env.PACK_AUTHER || "chucky❤️🧸",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "🧸❤️chucky-X-cylee❤️🧸",
  ownername: process.env.OWNER_NAME || "Shawn Legend 🍃🌙",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
