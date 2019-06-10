const Discord = require('discord.js');
const client = new Discord.Client();
const devs = ['']
const prefix = '-';


client.on('message', message => {
if(message.content === 'hi')
message.reply(`Hi`)
});

client.on(`ready`,ready => {
console.log(`welcome ${client.user.username}`)
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + 'bc'))
  var args = message.content.split(" ").slice(1)
  if(message.member.hasPermission('ADMINISTRATOR')) return message.reply(`ليس لديك صلاحيات الادمن`)
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply(`لا املك صلاحيات الادمن`) 
  client.guild.member.forEach(e => {
    e.send(args)
  });
});
    
    
client.login(process.env.BOT_TOKEN);
