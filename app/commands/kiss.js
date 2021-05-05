const Discord = require('discord.js');
const config = require('../config.json');


module.exports.run = async (client, message, args) => {
  
  let mencionado = message.mentions.users.first()
  let gifs = ['https://media1.tenor.com/images/feea2881e504805e7fbfc00abcfdf220/tenor.gif?itemid=17916458', 'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865', 'https://tenor.com/view/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E-anime-kiss-intimate-gif-17382422.gif', 'https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544']  
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  if(!mencionado) return message.channel.send("No mencionaste a nadie para besar.")
  
const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} a besado a ${mencionado.username}`)
    .setImage(randomIMG)
    .setColor("RANDOM")
message.channel.send(embed)
}

module.exports.help = {
  name: "kiss"
}