const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
//Uso command handler(por si acaso)
//El comando esta hecho en discord.js 12.2.0

const kickeado = message.mentions.users.first() || client.users.resolve(args[0]); //se crea la constante kickeado que seria la persona a la que mencionas
const razon = args.slice(1).join(' ') || "Razon no definida."; //se crea la constante razon, y si no se da una razon se identifica como "Razon no definida"

if(!kickeado) return message.channel.send("No mencionaste a nadie para expulsar.") //si no mencionas a nadie para expulsar, te devuelve el mensaje

if(message.author === kickeado) return message.channel.send("No puedes expulsarte tu mismo.") //si el autor es igual al kickeado te devuelve el mensaje

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No tienes permisos para expulsar personas.") //si el autor no tiene permisos para expulsar usuarios te devuelve el mensaje

if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("No tengo permisos para expulsar personas.") //si el bot no tiene permisos para expulsar personas te devuelve el mensaje


message.guild.member(kickeado).kick(razon); //expulsa el miembro
const embedkick = new Discord.MessageEmbed() //crea el embed
.setTitle("**Alguien ha sido kickeado!**")
.setDescription(`**${kickeado.username} ha sido kickeado del servidor.**\n` +
`**Razón = ${razon}**\n` +
`**Moderador responsable = ${message.author.username}\n**`)
.setColor("RED")
.setTimestamp()
.setFooter("Bot desarrollado por ItzLeonel#5050")//en TUNOMBRE pones tu nombre, esto es opcional.

message.channel.send(embedkick) //envia un mensaje al canal actual de expulsion exitosa
console.log(kickeado.username + " fue expulsado por " + message.author.username) //envia a la consola quien fue kickeado, y por quien.
}

module.exports.help = {
  name: "ping"
}