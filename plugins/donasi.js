let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0816-4682-9895]
│ •  [0856-2482-3115]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
