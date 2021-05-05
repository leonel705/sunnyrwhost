const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(message.guild.name, message.guild.iconURL())

    //SÃ­ el campo estÃ¡ vacÃ­o no ejecutarÃ¡ la siguiente acciÃ³n.
if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
    embed.setColor('RED')
    return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
}

//Creamos la variable para poder obtener y buscar miembros.
let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
    embed.setColor('RED')
    return message.channel.send(embed)
}

// SÃ­ no tienes el permiso de BAN_MEMBERS no puede ejecutar la siguiente acciÃ³n.
if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
    embed.setColor('RED')
    return message.channel.send(embed)
}

if (message.guild.members.resolve(member.id)) { // retorna un miembro o undefined si no fue encontrado en el servidor-
    // Declaramos SÃ­ el usuario mencionado tiene un nivel jerarquico mayor o igual al autor del baneo.
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a un usuario con mayor o igual nivel jerarquÃ­a que tÃº.') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)
    }
}
// Declaramos una variable para almacenar la razÃ³n.
let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar" //Al no llenar el campo de razÃ³n salta "RazÃ³n no especificada"
//Cumpliendo con lo anterior procede a realizar el baneo con su respectiva razÃ³n.
message.guild.members.ban(member.id, { reason: razon })
embed
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTitle('Â¡Baneo exitoso!')
    .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
    .addField('> RazÃ³n', razon)
    .setColor('AQUA')
    .setTimestamp()

if (!!member.user) member.user.send(embed).catch(e => e);
message.channel.send(embed) //enviamos en mensaje en formato embed al DM del usuario con la informaciÃ³n otorgada por el autor de ban.
}

module.exports.help = {
  name: "ping"
}