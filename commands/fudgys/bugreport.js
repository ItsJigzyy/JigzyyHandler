const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow, ButtonStyle } = require('discord.js');
module.exports = {
    name: 'BugReport',
    aliases: ['bug'],
    category: 'Infos',
    utilisation: '{prefix}bug',

    execute(client, message) {

        const BugRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Bug Report")
                    .setStyle("LINK")
                    .setURL('https://discord.com/channels/543535423046156288/697954751954026646')
            );

        message.reply({ content: `Follow the link below!\n**Please note you must be in Fudgy's DarkRP Discord Server**\n\nFormat:\n*?bugreport <detailed report here>*`, components: [BugRow] });
    },
};  