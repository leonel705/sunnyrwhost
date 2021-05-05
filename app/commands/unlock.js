const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
message.delete(); //eliminamos nuestro mensaje

var permisosUnlock = message.member.hasPermission('ADMINISTRADOR'); //verificamos que el usuario tenga permisos
if (!permisosUnlock) return message.channel.send('❌ | No tienes permisos para ejecutar este comando.'); //si el usuario no tiene permisos, retorna

let channelUnlock = message.mentions.channels.first() || message.channel; //creamos la variable en la que contiene la mención del canal o en el canal que estás escribiendo el comando
let rolstaffA = message.guild.roles.cache.find(rolstaffA => rolstaffA.id === 'ID_ROL'); //buscamos el rol Staff
let alluserA = message.guild.roles.cache.find(aus => aus.name === '@everyone'); //buscamos el rol @everyone

if (!message.member.hasPermission('ADMINISTRADOR')) return message.reply('❌ | No tienes permisos para ejecutar este comando.'); //si el usuario no tiene permisos, retorna

channelUnlock.updateOverwrite(alluserA, { //actualizamos los permisos del canal para @everyone
  READ_MESSAGE_HISTORY: true,
  SEND_MESSAGES: true,
  ADD_REACTIONS: true
}); //cerramos

channelUnlock.updateOverwrite(rolstaffA, { //actualizamos los permisos del canal para el rol Staff
  READ_MESSAGE_HISTORY: true,
  SEND_MESSAGES: true,
  ADD_REACTIONS: true
}); //cerramos

//creamos el embed de confirmación
const embedUnlock = new Discord.MessageEmbed()
.setDescription('El canal ha sido bloqueado.')
.setColor('GREEN');
message.channel.send(embedUnlock) //enviamos el embed
.then(msg => msg.delete({ timeout: 3000 })); //despúes de tres segundos, el embed se elimina
}

module.exports.help = {
  name: "ping"
}