import fetch from 'node-fetch'

//Plugin By Indra!!. 
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('Agustus 6 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Gopay  [088980303928] //isi nomer lu!! 
┃✾ Dana  [083102208923] //isi nomer lo!! 
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? Wa.me/6288980303928
┃ _Hasil donasi akan digunakan buat makan_
┃ _atau beli *RDP/VPS* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Tiktok My Bestie`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler