const Discord = require ('discord.js');

const bot = new Discord.Client();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//token de autenticação
//const token = '';
var config = require('./config.json');
client.login(config.TOKEN);

bot.login(TOKEN)
bot.on('ready', () => {
    console.log('hey-hey-hey criançada')
})

bot.on('message', msg => {
    if (msg.content === 'BotBoboca'){
        msg.reply('Alou')
    }
})