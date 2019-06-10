const Discord = require('discord.js');
const client = new Discord.Client();
const devs = ['']
const prefix = '~';


client.on('message', message => {
if(message.content === 'hi')
message.reply(`Hi`)
});

client.on(`ready`,ready => {
console.log(`welcome ${client.user.username}`)
});

client.on('message', message => {
  if(message.content === `-bc`)
  if (!message.member.hasPermission("ADMINISTRATOR"))  return; 
  var args = message.content.split(" ").slice(1).join(" ")
  var embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setTitle(`New Broadcast`)
.setThumbnail(`https://a.top4top.net/p_1008gqyyd1.png`)
.addField(`Message`, args)
  message.guild.members.forEach(e => 
    e.send(embed))
    message.reply(`Done send message to all members`)
  });
    
    
client.login(process.env.BOT_TOKEN);
