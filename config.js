I'mI'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349046369663";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_17_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx3VnlsYmFOay9Ea1NzT3lZZG9YdkdOS3QzMzRtL1ZYOGJpMWd1L1p0clk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBNcW1EVjhWUmlxXzJrX2N5RGEzR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzc0NGRlZTUtOWY1ZS00MGE4LWIyOGUtN2IzYjI1NGIzZDhjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDIxMixcbiAgICAgIDgyLFxuICAgICAgMTQ3LFxuICAgICAgODAsXG4gICAgICAyNTMsXG4gICAgICAxMzYsXG4gICAgICA4MyxcbiAgICAgIDI2LFxuICAgICAgMjA5LFxuICAgICAgMjAyLFxuICAgICAgNDEsXG4gICAgICAxMTUsXG4gICAgICAyMjAsXG4gICAgICAxNCxcbiAgICAgIDIyMixcbiAgICAgIDI1LFxuICAgICAgMjE0LFxuICAgICAgMTQ2LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDQyLFxuICAgICAgMjE2LFxuICAgICAgNDQsXG4gICAgICAxOTksXG4gICAgICAyMjQsXG4gICAgICAyMDQsXG4gICAgICAxMjMsXG4gICAgICA0MSxcbiAgICAgIDIzMSxcbiAgICAgIDIwNixcbiAgICAgIDI0MyxcbiAgICAgIDI0NCxcbiAgICAgIDE5OCxcbiAgICAgIDE4MyxcbiAgICAgIDE0OCxcbiAgICAgIDM4LFxuICAgICAgMjQsXG4gICAgICAyMjYsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzI0SDdYUUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDYzNjk2NjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYxOTU5MzkxNTc2MTMyOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUN1OUlnRkVQU2wrYmNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0R1Q3Yzd1U1BoVW4rQWRqRS9VUFhDN3V2b3IyNG9DcXZLVXoyWE01VlVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRucERBdG0raW54RVI0Q3JwN2JHSkJtbVpkV0FQZ1A3ZTBBK1U1UDZGREU1b0FISXRZdnRaSk55dzFibHlWS3ZGR0NYWVk2NWhhMnB1ZHBic1dyZUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhvM3Z0dkRYNE1INnJLbytUUWNqSDFtS1lVaTE0ZXh4d0o3VHplMG1VS1ZQWWNHa0UrQjVJKzNQeTRlM25JbmErcWlvV1M1ckVDUlFCSFEzWGd5S0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDYzNjk2NjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5NDM0MTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
