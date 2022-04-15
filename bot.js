const Discord = require ('discord.js');
///const jimp = require ('jimp');
const apng = require("gif-to-apng");
///const download = require ('download-file');
const client = new Discord.Client();
const configs = require("./random");
const config = require("./config.json");


//Status do bot
client.on("ready", () => {
     console.log(`hey-hey-hey criançada! Estamos em ${client.guilds.cache.size} servidores`);
     client.user.setActivity('Meu tempo fora');
});

client.on("guildCreate", guild => { ///notificação no console se o bot entrar em um servidor
    console.log(`O bot entrou no servidor ${guild.name} (id: {guild.id}, população: ${guild.memberCount}.`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => { ///notificação no console se o bot for removido de um servidor
    console.log(`O bot foi removido do servidor ${guild.name} (id: {guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message =>{ ///Definindo para nao responder mensagens se o autor for outro bot
    if(message.author.bot) return;
    if(message.channel.type === "dm")  return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
///estrutura para criar comando
    if (comando === "ping"){
        const m = await message.channel.send("Ping?")///comando para medir ping
        m.edit(`Ping! A latencia é ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API é ${Math.round(client.ping)}ms.`)
    }

    if(comando === "apng"){
       let [nome, emojilink] = args
       let info = {filename: (`${GerarString}`)}
       if(!args[0]) return message.reply("Você esqueceu de adicionar os agumentos \n !apng <nome> <link>") ///resposta caso falte algumentos
       if(!args[1]) return message.reply("Você esqueceu de adicionar os agumentos \n !apng <nome> <link>") ///resposta caso falte algumentos

           directory: ("./img/Conversor"),
           download(emojilink, imagens, function(err){
               if (err) throw err
               console.log("Yeah yeah! Convertido baby")
           })
       }

    }

);

client.login(config.token);