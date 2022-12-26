let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('_Elaina_ *Tidur!* ꈍᴗꈍ ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
//jangan di jual scriptnya awas gw attack nomer lu biar dibanned 
//Records : Itsuka Indra 
//Nomer : 0889 8030 3928 
//jangan jual scriptmya awas lu kalo jual!! 
//kalo mau add fitur chatting aja tu nomer gw

handler.help = ['Elaina(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

handler.admin = true
handler.group = true

export default handler
