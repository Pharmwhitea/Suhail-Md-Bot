I'mconst fs = require('fs-extra')
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

  sessionName:process.env.SESSION_ID || "SUHAIL_17_23_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bzlFcC9MWU5LRWdFZWhOYm4vYVVxclZySEMyYnpTalZzSk9oZUZzSlNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZZ2VHRDV5TFRsV0FNd2tpcnYxN1B3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxM2I5Y2RkLTQ2YjMtNGZhYS1hOWE5LTkyMjc3YjZjYmY0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDE5OCxcbiAgICAgIDMxLFxuICAgICAgMjM2LFxuICAgICAgMjA3LFxuICAgICAgMixcbiAgICAgIDgxLFxuICAgICAgMTIwLFxuICAgICAgMTg0LFxuICAgICAgMTM5LFxuICAgICAgOTEsXG4gICAgICA3NSxcbiAgICAgIDE0OCxcbiAgICAgIDE2NyxcbiAgICAgIDIzLFxuICAgICAgMjEsXG4gICAgICA3MyxcbiAgICAgIDI0NCxcbiAgICAgIDE4OCxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMjEwLFxuICAgICAgMTYsXG4gICAgICA0MyxcbiAgICAgIDkwLFxuICAgICAgMjI3LFxuICAgICAgMTYwLFxuICAgICAgMzgsXG4gICAgICAxMTYsXG4gICAgICAxNDIsXG4gICAgICAxMzcsXG4gICAgICAxNjksXG4gICAgICAxODgsXG4gICAgICA4MCxcbiAgICAgIDU0LFxuICAgICAgMTE5LFxuICAgICAgMTEwLFxuICAgICAgMTMsXG4gICAgICAxNjksXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSktEUFk2VlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDYzNjk2NjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYxOTU5MzkxNTc2MTMyOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUN1OUlnRkVQYUM5cmNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0R1Q3Yzd1U1BoVW4rQWRqRS9VUFhDN3V2b3IyNG9DcXZLVXoyWE01VlVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRoUlZueGl2ZzFtSS9zZXh2NWxJWWdpakxrbGpJRmxIWG5QekQzNjdxNDc5VmdyYTJGNkkxcE5lZTVtNmUzNXg0SEQycy82QVJiWlRCcGQrT0MvOUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpqUTVoakVPSGhxVHB6WGRGV0ZSUEhQVEJ2SGtmbGFrN3cvak96dnpEcDFCUFVYcVB3Q3FxbStlTGU0WDZXUVRUUjUweFhUNys0UWFYNk5NM3hKb0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDYzNjk2NjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc4ODk3ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
