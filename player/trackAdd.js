module.exports = (client, message, queue, track) => {

    const { Client, MessageEmbed } = require("discord.js");

    const StartEmbed = new MessageEmbed()

    
    .setColor("#ff331f")
    .setDescription(`${client.emotes.music} \**${track.title}\** added to the queue`)
    .setFooter(`Requested by: ${track.requestedBy.username}`)





    message.channel.send(StartEmbed);

};