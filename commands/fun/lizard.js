module.exports = {
    name: 'Lizard',
    aliases: ['Reptile'],
    category: 'Fun',
    utilisation: '{prefix}lizard',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const fetch = require("node-fetch");
        const data = await fetch("https://nekos.life/api/v2/img/lizard").then((res) => res.json());

        const Lizembed = new MessageEmbed()
            .setImage(`${data.url}`);

        message.channel.send(Lizembed);
    },
};