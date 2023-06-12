const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'Report',
    aliases: ['rep'],
    category: 'Infos',
    utilisation: '{prefix}Report',
    execute(client, message) {

        const ReportRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Player Report")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/forums/thread.php?tid=5914'),

                new MessageButton()
                    .setLabel("Staff Report")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/forums/thread.php?tid=12442')
            );
        message.reply({ content: "Here are the Report links:", components: [ReportRow] });

    },
};  