const Discord = require ('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
     console.log('Bot iniciado com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores');
     client.user.setGame('estou em ${client.guilds.size} servidores');
    });

client.on