const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("ItzLeonel")
      .setTitle("Help")
      .setDescription("A continuación se muestran los comandos que puede hacer con el bot. En este momento solo hay 6 comandos disponibles, pronto se agregarán más comandos.")
      .addField("🎁 Sorteos 🎁","<start [channel-name] [Time] [winners] [Prize]\n<reroll [prize name]\n<end [prize name]")
      .addField("Ejemplos", "<start #giveaway 5m 1 Testing\n<end Testing\n<reroll Testing")
      .addField("Utilidad", "<ping", true)
      .addField("ℹ Informacion ℹ", "<stats", true)
      .addField("Moderacion", "<nuke\n<lock\n<unlock\n<kick\n<ban\n<", true)
      .addField("Diversion", "<kiss\n<slap\n<hug", true)
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**¡Envió los comandos en Mensajes Directos! 💌, comprobar DM**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
