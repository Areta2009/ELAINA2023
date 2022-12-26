let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('_Elaina_ *Bangun!* (≧ω≦) ')
}
//jangan di jual scriptnya awas gw attack nomer lu biar dibanned 
//Records : Itsuka Indra 
//Nomer : 0889 8030 3928 
//jangan jual scriptmya awas lu kalo jual!! 
//kalo mau add fitur chatting aja tu nomer gw

handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler
