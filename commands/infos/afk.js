module.exports = {
    name: 'AFK',
    aliases: ['afk'],
    description: "Set yourself as AFK within the guild",
    category: 'Infos',
    utilisation: '$afk [reason]',

    async execute(client, message, args) {

        const Discord = require('discord.js');
        const { MessageEmbed } = require("discord.js");
        const db = require("quick.db");
        const afkReason = args.join(" ");

        db.set(`afk-${message.author.id}`, afkReason)
        message.delete().catch(O_o => { });
        afkEmbed = new MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setDescription(`AFK Status: **ON**\nReason: **${afkReason}**`)
            .setColor('#2C2F33')
            .setFooter({ text: "I will notify anyone who mentions you" })
            .setTimestamp(new Date())

        message.reply({ embeds: [afkEmbed] })
            .then(msg => {
                setTimeout(() => msg.delete(), 12000)
            })
    },
};  