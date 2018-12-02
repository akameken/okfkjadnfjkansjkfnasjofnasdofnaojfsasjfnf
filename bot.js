const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"
client.on('ready', async => {
client.user.setGame('》 Sha▪Her Community . ' , 'https://twitch.tv/ichbinxirdx')
client.user.setStatus('idle')
});

client.on('message' , message => {
  
              var no = client.emojis.find(r => r.name === 'nono');
              var yes = client.emojis.find(r => r.name === 'sure');
 let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.startsWith(prefix + "bc")) {
      

   if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(no + " **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
     if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send(no + " **I need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
       if (!args[0]) {
message.channel.send("**Please type a message .. **").then(msg => msg.delete(2000));
return;
}
    message.channel.send("**This message was sent to** `"+message.guild.members.size+"` **members **:loudspeaker:.")
 

message.guild.members.forEach(m => {
 let edward = new Discord.RichEmbed()
   .setAuthor(message.author.username,message.author.avatarURL)
   .addField(`**SERVER : **`,`${message.guild.name}`+`
`+"``["+message.guild.id+"]``")
 .addField(`**SENDER : **`,`${message.author}`+"``["+message.author.tag+"]``")
 .setThumbnail(`${message.author.avatarURL}`)
.setDescription(`
َ
َ
ٍَ
**${args.replace(`[user]`, m)}**


ٍ `)
.setColor('#000000').setColor('#36393e')
   .setFooter(m.user.username,m.user.avatarURL)
 .setTimestamp();
   m.sendEmbed(edward)
					if(message.attachments.first()){
						m.sendFile(message.attachments.first().url).catch();
  
          }})}});


client.on('message' , message => {
if(message.content.startsWith(prefix+ "ping")) {
  let edward = Discord.RichEmbed()
.setColor("#6b07e0")
.setAuthor(client.user.username,client.user.avatarURL)
.setTitle(`**The Bot's Ping is : ${Math.round(client.ping)}  MS ⚡**`)
.setFooter(message.author.username,message.author.avatarURL)
.setTimestamp()


 message.channel.send("Pong!").then(m => {
    m.edit(`**Timetaken :** \`\`${m.createdTimestamp - message.createdTimestamp}\`\` ms 
**Discord API :** \`\`${Math.round(client.ping)}\`\` ms`)
  
  })}});

client.on('message', message => {
   const no = client.emojis.find(r => r.name === 'nono');
              var yes = client.emojis.find(r => r.name === 'sure');
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

    if(command === "clear") {
        
 
  
    let textxt = args.slice(0).join("");
       
    if(!message.member.hasPermission("MANAGE_MESSAGES"))   return message.channel.send(no + " ** you dont have premissions to use this command !**").then(msg => msg.delete(3000));
       if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(no +  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
    if (textxt == "") {
        message.channel.bulkDelete(100).then(m => {
  message.channel.send(yes + " **Successfully deleted :** ``100`` **messages.** ").then(m => m.delete(1000));
  })
} else {
    message.delete().then
    message.delete().then
    message.channel.bulkDelete(textxt);
        message.channel.send(yes + " **Successfully deleted :** ``" +textxt+ "`` **messages.** ").then(m => m.delete(3000));
        }    
    }
}
);


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("514949014844735498");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});

const moment = require('moment')

client.on('guildMemberAdd' , member => {
const guild = client.guilds.get("514949014844735498");
    const role = guild.roles.get("518511268282368004");
member.addRole(role)
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
           
                   var alm = Invite.inviter
                   	var	joinDiscord = moment(member.user.createdAt).format('lll') + '\n*' + moment(new Date()).diff(member.user.createdAt, 'days') + ' days ago*';

  let edward = new Discord.RichEmbed()
 
  .setAuthor(member.user.username,member.user.avatarURL)
  .addField(`**MEMBER NAME : **`,`${member.user.username}`)
  .addField(`**JOINED AT : **`,`**`+moment(new Date()).diff(member.user.createdAt, 'days')+ ` Days Ago** `+"``["+moment(member.user.createdAt).format('lll')+"]``")
  .addField(`**INVITED BY : **`,`${Invite.inviter}`)
  .addField(`**MEMBER COUNT : **`,`${guild.members.size}`)
  .setColor('#000000').setColor('#36393e')
  .setTimestamp()
  .setFooter(alm.username,alm.avatarURL)
  .setThumbnail(member.user.avatarURL)
  var room = client.channels.get("514972053695234069")
  
  room.sendEmbed(edward) 
                
                })})});
client.on('message', message => {
  if(message.guild) {
if(message.content.startsWith(prefix + "kick")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Kicked From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
    mention.kick().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Kick ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}
}});



client.on('message', message => {
  
if(message.content.startsWith(prefix + "ban")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Banned From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
   mention.ban().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Ban ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}});
    
   




client.on('message', message => {
  
if(message.content.startsWith(prefix + "mute")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.get("518593809815175188")
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Muted From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
   mention.addRole(role)
  message.channel.sendEmbed(edward)
}});




client.on('message', message => {
  
if(message.content.startsWith(prefix + "unmute")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.get("518593809815175188")
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been UnMuted From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
   mention.removeRole(role)
  message.channel.sendEmbed(edward)
}});




















client.on('message' , message => {
  if(message.content.startsWith(prefix + "user")) {
    
      const args = message.content.split(' ');

const guild = client.guilds.get("514949014844735498");
   const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
         
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
           var gn = mention.presence.game
         
                   var alm = Invite.inviter
                   
///let roles = new Collection(Array.from(guildMember.roles.entries()).sort((a: any, b: any) => b[1].position - a[1].position));
         
               ///    	var	joinDiscord = moment(mention.user.createdAt).format('lll') + '\n*' + moment(new Date()).diff(mention.user.createdAt, 'days') + ' days ago*';
if(gn === null) 
gn = '**NOTHING**'
  let edward = new Discord.RichEmbed()

  .setAuthor(mention.username,mention.avatarURL)
  .addField(`**MEMBER NAME : **`,`${mention.username}`)
  .addField(`**JOINED AT : **`,`**`+moment(new Date()).diff(mention.createdAt, 'days')+ ` Days Ago** `+"``["+moment(mention.createdAt).format('lll')+"]``")
  .addField(`**INVITED BY : **`,`${Invite.inviter}`)
  .addField(`**MEMBER COUNT : **`,`${guild.members.size}`)
  .addField(`**STATUS : **`,mention.presence.status)
.addField(`**PLAYING : **`,`${gn}`)
  .setColor('#000000').setColor('#36393e')
  .setTimestamp()
  .setFooter(alm.username,alm.avatarURL)
  .setThumbnail(mention.avatarURL)
  message.channel.sendEmbed(edward)
        })})}});







client.on('message', message => {
if(message.content.startsWith(prefix + "server")) {
  var lol = message.guild.verificationLevel
  if(lol === 0)
lol = "Low"
  if(lol === 1)
lol = "Meduim"
  if(lol === 2) 
lol = "Hard"
  if(lol === 3)
    lol = "SoHard"
let edward = new Discord.RichEmbed()  
.setColor('#000000').setColor('#36393e')
.addField(`SERVERID `,"``["+`${message.guild.id}`+"]``")
.addField(`Owner`,`${message.guild.owner}`)
.addField(`Channels`,`${message.guild.channels.size}`)
.addField(`CreatedAt`,`**${moment(new Date()).diff(message.guild.createdAt, 'days')+ ` Days Ago** `+"``["+moment(message.guild.createdAt).format('lll')+"]``"}`)
.addField(`Region`,`${message.guild.region}`)
.addField(`MemberCount`,`${message.guild.members.size}`)
.addField(`Modefaction Level`,`${lol}`)
.setAuthor(message.guild.name,client.user.avatarURL)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
message.channel.sendEmbed(edward)
}});

client.on('message', message => {
  if(message.content.startsWith(prefix + 'presence')) {
 let args = message.content.split(' ').slice(1)
     let args1 = message.content.split(' ').slice(2)
      if(!args1) return message.channel.send('type something')

    if(args === "playing") return   message.channel.send(`${args} : ${args1}`)
    
 client.user.setGame(`${args1}`)
  
    if(args.content === "streaming") return
client.user.setGame(`${args1}`,`https://twitch.tv/ichbinxirdx`)
    message.channel.send(`streaming :${args1}`)
    
      if(args.content === "listeningto") return
client.user.setActivity(`${args1}`, {type:'LISTENING'})
      
message.channel.send(`listening : ${args1}`)
      
  }
});




client.login(process.env.BOT_TOKEN)
