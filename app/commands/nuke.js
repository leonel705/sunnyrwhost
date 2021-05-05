const config = require('../config.json');
const { Client, MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('Necesitas el permiso de manejar canales')
  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('Necesito el rol: Manejar canales')

  message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id);
    ch.setPosition(message.channel.position);
    message.channel.delete();

    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(`<:> este canal a sido nukeado :Sun_Tree:`)
      // Set the color of the embed
      .setColor(0xff0000)
      .setImage('https://64.media.tumblr.com/bd6fc1ccb33aa25b23d17c0e89c83211/542e3839066b4797-04/s1280x1920/59cbdd7e85f5c7a6e43e810fe3c4630575d3bc50.gif')
      // Set the main content of the embed
    // Send the embed to the same channel as the message
    ch.send(embed);
  })  
}

module.exports.help = {
  name: "nuke"
}