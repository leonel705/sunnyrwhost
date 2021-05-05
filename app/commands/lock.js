const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  message.delete(); //borramos nuestro mensaje

  var permisosLock = message.member.hasPermission('ADMINISTRADOR'); //creamos una variable de permisos
if (!permisosLock) return message.channel.send('❌ | No tienes permisos para ejecutar este comando.'); //si no tienes permisos, retorna

let channelLock = message.mentions.channels.first() || message.channel; //creamos una variable la cual contiene la mención del canal o el canal en el que ejecutamos el mensaje
let rolstaff = message.guild.roles.cache.find(rolstaff => rolstaff.id === 'ID_ROL'); //buscamos el rol de Staff
let alluser = message.guild.roles.cache.find(aus => aus.name === '@everyone'); //buscamos el rol @everyone
if (!message.member.hasPermission('ADMINISTRADOR')) return message.reply('❌ | No tienes permisos para ejecutar este comando.'); //si no tienes permisos, retorna

channelLock.updateOverwrite(alluser, { //actualizamos los permisos del canal para @everyone
  READ_MESSAGE_HISTORY: true,
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
});

channelLock.updateOverwrite(rolstaff, { //actualizamos los permisos del canal para el rol de Staff
  READ_MESSAGE_HISTORY: true,
  SEND_MESSAGES: true,
  ADD_REACTIONS: true
});


//creamos el embed de confirmación
const embedLock = new Discord.MessageEmbed()
.setDescription('El canal ha sido bloqueado.')
.setColor('GREEN');
message.channel.send(embedLock)
.then(msg => msg.delete({ timeout: 3000 })); //después de tres segundos, el embed se elimina
}

module.exports.help = {
  name: "ping"
}