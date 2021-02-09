const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  let link = args[0]
  let linksahipi = args[1]
  //  if (message.author.id !== 'Here Admin ID') return
  //   if (message.author.id !== 'Here Admin ID' && message.author.id !== 'Here Admin ID 2' && message.author.id !== 'Here Admin ID 3') return;
if(!link) {
 return message.channel.send("wrong usage!, use .remove <link>");
  
  message.delete();
}
  if(!db.get("linkler").map(z => z.url).includes(link)) {
   return message.channel.send("Already deleted from system");
    
    message.delete();
  } 
  db.set("linkler",db.get("linkler").filter(x => x.url != link))
db.add(`user.${linksahipi}.sinir`,-1)
  
  message.delete();
    message.channel.send(`successfully removed from the system.`)
  
  message.delete();
  
  message.channel.send("")
  

  
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rmv','removelink','delete'],
  permLevel: 4
};

exports.help = {
  name: 'remove'
};
