module.exports = (client, message, queue, track) => {

    const { Client, MessageEmbed } = require("discord.js");

    const StartEmbed = new MessageEmbed()

    
    .setColor("#2C2F33")
    .setDescription(`${client.emotes.music} \**${track.title}\** added to the queue`)
    .setFooter(`Requested by: ${track.requestedBy.username}`)





    message.channel.send(StartEmbed);

};