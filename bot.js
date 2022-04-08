const Discord = require ('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
     console.log("hey-hey-hey criançada!");
     //client.user.setGame('estou em ${client.guilds.size} servidores');
});

client.on("guildCreate", guild => {
    console.log('O bot entrou no servidor ${guild.name} (id: {guild.id}, população: ${guild.memberCount}.');
    client.user.setActivity("Estou em ${client.guilds.size} servidores");
});

client.on("guildDelete", guild => {
    console.log('O bot foi removido do servidor ${guild.name} (id: {guild.id})');
    client.user.setActivity("Serving ${client.guilds.size} servers");
});

client.on("message", async message =>{

});

client.login(config.token);