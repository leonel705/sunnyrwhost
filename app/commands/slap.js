const Discord = require('discord.js');
const config = require('../config.json');


module.exports.run = async (client, message, args) => {
  
  let mencionado = message.mentions.users.first()
  let gifs = ['https://media1.tenor.com/images/612e257ab87f30568a9449998d978a22/tenor.gif?itemid=16057834458', 'https://media1.tenor.com/images/528ff731635b64037fab0ba6b76d8830/tenor.gif?itemid=17078255', 'https://media1.tenor.com/images/fe39cfc3be04e3cbd7ffdcabb2e1837b/tenor.gif?itemid=15144612', 'https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif?itemid=17784858']  
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  if(!mencionado) return message.channel.send("No mencionaste a nadie para cachetear.")
  
  const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} a cacheteado a ${mencionado.username}`)
    .setImage(randomIMG)
    .setColor("RANDOM")
  message.channel.send(embed)
}

module.exports.help = {
  name: "slap"
}