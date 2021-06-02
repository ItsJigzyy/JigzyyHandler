module.exports = {
    name: 'about',
    aliases: ['a'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {

        const { Client, MessageEmbed } = require("discord.js");

        const AboutEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`About ${client.user.username}:`)
            .setDescription(`I'm Jigzyy, I like to code stuff when I'm bored. ${client.user.username} was one of my projects, I started coding this musical masterpiece around the 14th of April 2021.\n\nI try to add more unique/helpful commands and features whenever I can.\nIf you have any suggestions for commands, I'd love to hear them so just DM me :D`)
            .setFooter(`Jigzyy, owner of all things ${client.user.username} <3`)





    }
}