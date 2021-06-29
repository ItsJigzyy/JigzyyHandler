module.exports = {
    name: 'Dog',
    aliases: ['Furry'],
    category: 'Fun',
    utilisation: '{prefix}dog',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const fetch = require('node-fetch');
        let msg = await message.channel.send("Searching for a dog...")

        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(res => res.json()).then(body => {
                if (!body) return message.reply("An error occured somewhere?  :thinking: ")

                let dEmbed = new MessageEmbed()
                    .setColor("#ff331f")
                    .setImage(body.message)
                    .setTimestamp()

                message.channel.send(dEmbed)
                msg.delete();
            })
    },
};