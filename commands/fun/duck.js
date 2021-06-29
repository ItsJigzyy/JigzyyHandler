module.exports = {
    name: 'Duck',
    aliases: ['Quack'],
    category: 'Fun',
    utilisation: '{prefix}duck',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");
const data = await fetch("https://random-d.uk/api/v1/random?type=gif").then((res) => res.json());

const duckembed = new MessageEmbed()
    .setImage(`${data.url}`)
    .setTimestamp()

message.channel.send(duckembed);

    },
};