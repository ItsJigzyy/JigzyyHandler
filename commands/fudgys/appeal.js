const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'Appeal',
    aliases: ['app'],
    category: 'Infos',
    utilisation: '{prefix}Appeal',
    execute(client, message) {

        const appealEmbed = new MessageEmbed()
            .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }), url: 'https://fudgygaming.com/forums/index.php' })
            .setColor("#2C2F33")
            .setTitle(`Warn/Ban Appeal`)

        const AppealRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Warn Appeal")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/forums/thread.php?tid=658'),

                new MessageButton()
                    .setLabel("Ban Appeal")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/forums/thread.php?tid=15953')
            );

        // embeds: [appealEmbed],
        message.reply({ content: "Here are the Warn and Ban Appeal links:", components: [AppealRow] });

    },
};  