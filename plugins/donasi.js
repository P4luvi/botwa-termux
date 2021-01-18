let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Saweria: [saweria.co/darkbot2412]
│ • Telkomsel/Gopay: [0813-6864-6011]
│ • Dana: Kosong
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281368646011
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
