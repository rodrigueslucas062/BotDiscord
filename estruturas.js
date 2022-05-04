const jimp = require ("jimp");


///enviar imagem quando um novo usuario entrar
client.on("guildMemberAdd", async member=>{
    let canal = client.channels.get("964270593379799080")
    let mask = await jimp.read('./img/teste')
   })
   