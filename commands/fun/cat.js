module.exports = {
    name: 'Cat',
    aliases: ['Pussy'],
    category: 'Fun',
    utilisation: '{prefix}cat',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");


const fetch = require('node-fetch');

let msg = await message.channel.send("Searching for a cat...")

fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if (!body) return message.reply("An error occured somewhere?  :thinking: ")

        let cEmbed = new MessageEmbed()
            .setColor("#ff331f")
            .setImage(body.file)
            .setTimestamp()

        message.channel.send(cEmbed)
        msg.delete();
    })

},
};