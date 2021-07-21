module.exports = {
    name: 'Fox',
    aliases: ['Foxy'],
    category: 'Fun',
    utilisation: '{prefix}fox',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

const fetch = require("node-fetch");
const data = await fetch("https://randomfox.ca/floof/").then((res) => res.json()
);

const foxembed = new MessageEmbed()
    .setImage(`${data.image}`)
    .setTimestamp()
    .setColor('#ff331f')

message.channel.send(foxembed);
    },
};



