module.exports = {
    name: 'Paul',
    aliases: ['Paul'],
    category: 'Fun',
    utilisation: '{prefix}paul',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        message.channel.send({ content: "Paul says Hi", files: ["./Paul.png"] });

        message.delete().catch(O_o => { });
    },
};  