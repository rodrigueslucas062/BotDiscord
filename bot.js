const Discord = require ('discord.js');
const client = new Discord.Client();
const config = require("./config.json")


//Status do bot
client.on("ready", () => {
     console.log(`hey-hey-hey criançada! Estamos em ${client.guilds.cache.size} servidores`);
     client.user.setActivity('Meu tempo fora');
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor ${guild.name} (id: {guild.id}, população: ${guild.memberCount}.`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor ${guild.name} (id: {guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm")  return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
///estrutura para criar comando
    if (comando === "ping"){
        const m  = await message.channel.send("Ping?")
        m.edit(`Ping! A latencia é ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API é ${Math.round(client.ping)}ms.`)
    }



});

client.login(config.token);