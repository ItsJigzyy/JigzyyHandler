module.exports = {
    name: 'AFK',
    aliases: ['afk'],
    description: "Set yourself as AFK within the guild",
    category: 'Infos',
    utilisation: 'afk [reason]',

    async execute(client, message, args) {

        const Discord = require('discord.js');
        const { MessageEmbed } = require("discord.js");
        const db = require("quick.db");
        const afkReason = args.join(" ");

        await db.set(`afk-${message.author.id}+${message.guild.id}`, afkReason)

        message.channel.send(
            new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`AFK Status: **ON**\nReason: **${afkReason}**`)
                .setColor('WHITE')
                .setFooter("I will notify anyone who mentions you")
        ).then
    },
};