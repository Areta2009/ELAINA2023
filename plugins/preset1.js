import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 1 」*
https://alight.link/jFQ3BdcHfxEmfTFbA
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p1)$/i
handler.limit = true

//kek bocah pake preset hahah canda banh
export default handler
