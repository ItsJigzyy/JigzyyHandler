module.exports = (client, message, track) => {

    const { Client, MessageEmbed } = require("discord.js");

    const StartEmbed = new MessageEmbed()

    .setTitle(`Now playing...`)
    .setColor("#ff331f")
    .setDescription(`\**${track.title}\**`)
    .setAuthor(`Requested by: ${track.requestedBy.username}`)
    .setThumbnail(`${track.thumbnail}`)










    message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};