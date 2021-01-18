let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Anker Production
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/4NK3R-PRODUCT1ON/botwa-termux
╠➥ Instagram: @anker_2412
╠➥ YouTube: Anker Production
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Saweria: saweria.co/darkbot2412
╠➥ Tsel/Gopay: 0813-6864-6011
╠➥ Dana: Kosong
║
║>Request? Wa.me/6281368646011
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

