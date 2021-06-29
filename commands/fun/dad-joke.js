module.exports = {
    name: 'Dad-joke',
    aliases: ['dadjoke'],
    category: 'Fun',
    utilisation: '{prefix}dad-joke',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const fetch = require("node-fetch");
        const data = await fetch("https://icanhazdadjoke.com/slack").then((res) => res.json());

        message.reply(data.attachments[0].fallback);

    },
};