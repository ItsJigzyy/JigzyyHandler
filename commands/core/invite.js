module.exports = {
    name: 'invite',
    aliases: ['inv'],
    category: 'Core',
    utilisation: '{prefix}invite',

    execute(client, message) {

        const { Client, MessageEmbed } = require("discord.js");

        const InvEmbed = new MessageEmbed()
            .setColor("#ff00cb")
            .setTitle("Click here to add")
            .setFooter("Thank you for using my bot - Jigzyy <3")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=845396814688944148&permissions=8&scope=bot")
            .attachFiles(['../assets/GrinningSmilePic.png'])
            .setThumbnail('attachment://GrinningSmilePic.png');


        message.channel.send(InvEmbed);
    },
};