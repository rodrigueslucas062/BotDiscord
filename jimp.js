const jimp = require ('jimp')

///chamar a função do jimp
async function main(){
    ///let fonte = await jimp.loadFont(jimp.FONT_SANS_16_WHITE)///armazenando a fonte em uma variavel
    let mask = await jimp.read('./img/teste')
    ///let avatar = await jimp.read('')
}