module.exports = {
    name: 'about',
    aliases: ['a'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const AboutEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`About ${client.user.username}:`)
            .setDescription(`The Xcel bot has been an ongoing project since around the first lockdown`)
            .setFooter(`Jigzyy, owner of all things ${client.user.username} <3`)


        message.channel.send(AboutEmbed)


    }
}