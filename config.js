const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348079676393";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_54_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTJpd0RVemIzU0J3eUN5S3h3dDJBRC9iZVVzUlBkQlRjcGNzbjlKU0k2WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc5Njc2MzkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMEU4MDYzQUJBNDJGOUI0RUI4MjcwQTJGNkFBRjE5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyOTY0ODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVmtQYzhXX3JRc1N2bDgySEVEclVVd1wiLFxuICBcInBob25lSWRcIjogXCJmOTU0ZWU5YS1lNzk4LTQ1MmEtYTllMi00NGVmNDY0YzhjOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTI1LFxuICAgICAgMjIwLFxuICAgICAgMjQyLFxuICAgICAgODQsXG4gICAgICAxMTUsXG4gICAgICA3NyxcbiAgICAgIDMzLFxuICAgICAgMTksXG4gICAgICAzLFxuICAgICAgMTE2LFxuICAgICAgMTYzLFxuICAgICAgMTAwLFxuICAgICAgMTU2LFxuICAgICAgNDQsXG4gICAgICAxOTYsXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDExNSxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAyMTYsXG4gICAgICAxMixcbiAgICAgIDIxNSxcbiAgICAgIDI4LFxuICAgICAgMjA2LFxuICAgICAgMCxcbiAgICAgIDI0LFxuICAgICAgMjQwLFxuICAgICAgMTc0LFxuICAgICAgMzMsXG4gICAgICAxMSxcbiAgICAgIDIxMCxcbiAgICAgIDIwLFxuICAgICAgMTUwLFxuICAgICAgMzcsXG4gICAgICAxNjAsXG4gICAgICAxMzYsXG4gICAgICAyMTMsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJNUU1GRVQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc5Njc2MzkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVlc3RoZXJha29kdVwiLFxuICAgIFwibGlkXCI6IFwiMjAwMzM5MzUzNTMwMzcyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENGMjRZREVOek00N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLQkJTZTV5T1lFZmtERVAxTEFLZC9WL2t1VXN0K01RM285TnZ2N056bDFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhNcnl5M0E3QjlnSjBjcS9CK1FJODVZTnlLT1hjTlR1MTdIT0JNMDRESnk4M2Z4WE1QUzdvV0RuS1RLeHlFWEhyaEJJbXA2aTNMbmpVdnhyMXFoRkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9oU25zdXpBb1ZhZ2E3VXNuS0dESTRsMmg1bzE4bExsbWlMaDgvWnV1L2xYamhpRzhjL3MzMVE5ZnV1OEs0cFFGd2JuYkU1WHhCRWxXVzAvY2tjN0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzk2NzYzOTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI5NjQ3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQwbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDBtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWhJTEI2QTVlL1lHODlCbnVIVnk3U0g5YlptbThoNkVuOHZla2FsZDNmUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTkzODA5MTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI5NjQ4MzAzNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
