const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'Donate',
    aliases: ['store'],
    category: 'Infos',
    utilisation: '{prefix}donate',
    execute(client, message) {

        const appealEmbed = new MessageEmbed()
            .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }), url: 'https://fudgygaming.com/forums/index.php' })
            .setColor("#2C2F33")
            .setTitle(`Fudgy's DarkRP Store`)

        const RanksRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("VIP")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/store/store.php?page=purchase&type=pkg&pid=1'),

                new MessageButton()
                    .setLabel("VIP+")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/store/store.php?page=purchase&type=pkg&pid=2'),

                new MessageButton()
                    .setLabel("MVP")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/store/store.php?page=purchase&type=pkg&pid=3'),

                new MessageButton()
                    .setLabel("GOAT")
                    .setStyle("LINK")
                    .setURL('https://fudgygaming.com/store/store.php?page=purchase&type=pkg&pid=12')
            );
        message.reply({ content: "Here are the links to the available ranks!", components: [RanksRow] });
    },
};  