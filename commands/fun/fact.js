module.exports = {
    name: 'Fact',
    aliases: ['Facts'],
    category: 'Fun',
    utilisation: '{prefix}fact',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const fetch = require("node-fetch");

        const { text } = await fetch(
            "https://uselessfacts.jsph.pl/random.json?language=en"
        ).then((response) => response.json());
        const Embed = new MessageEmbed()
            .setTitle("Random Useless Facts:")
            .setColor(message.author.displayHexColor)
            .setDescription(text)
        message.reply({ embeds: [Embed] });
    },
};  