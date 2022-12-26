import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Agustus 06 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hallo Kakak*
ɪ'ᴍ ᴇʟᴀɪɴᴀ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ɢᴀᴋ ɴɪᴀᴛ ᴏʟᴇʜ ʀᴏʏ ᴏғғɪᴄɪᴀʟ ᴋᴀʀᴇɴᴀ ᴍᴀʟᴇꜱ ʀᴇᴄᴏᴅᴇ ᴊᴀᴅɪ ᴘᴀᴋᴇ ᴀᴊᴀ ᴀᴘᴀ ʏᴀɴɢ ᴀᴅᴀ ʏᴀʜ.
Kalau Ada Yg Error Bisa Langsung Report Ke Owner.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `ELAINA💞 : DIBUAT PADA TAHUN 2022`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/b5eccff60d16dfeefea1a.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/DuwmbXQJQyw73HGAHMNEuZ'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
