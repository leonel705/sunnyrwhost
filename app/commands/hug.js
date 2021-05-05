const Discord = require('discord.js');
const config = require('../config.json');


module.exports.run = async (client, message, args) => {
  
  let mencionado = message.mentions.users.first()
  let gifs = ['https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705', 'https://media1.tenor.com/images/8af307989eb713d2f3817f0e2fd1676d/tenor.gif?itemid=15793129', 'https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587', 'https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500']  
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
  
  if(!mencionado) return message.channel.send("No mencionaste a nadie para abrazar.")
  
const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} abraza a ${mencionado.username}`)
    .setImage(randomIMG)
    .setColor("RANDOM")
message.channel.send(embed)
}

module.exports.help = {
  name: "hug"
}