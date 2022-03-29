const Discord = require ('discord.js');

const { Client, Intents } = require('discord.js');
// Criar uma nova instancia do cliente 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//token de autenticação
const token = 'OTU4MDIyNTgyNzU2NTg5NTg4.YkHSDg.OgehvvPQFVnv6KNuuv-yLEEt4Jw';

bot.login(token)
bot.on('ready', () => {
    console.log('hey-hey-hey criançada')
})

bot.on('message', msg => {
    if (msg.content === 'BotBoboca'){
        msg.reply('Alou')
    }
})