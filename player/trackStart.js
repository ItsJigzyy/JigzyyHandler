module.exports = (client, message, track) => {

    const { Client, MessageEmbed } = require("discord.js");

    const StartEmbed = new MessageEmbed()

    .setTitle(`${client.emotes.music} Now playing...`)
    .setColor("#2C2F33")
    .setDescription(`\**${track.title}\**`)
    .setAuthor(`Requested by: ${track.requestedBy.username}`)
    .setThumbnail(`${track.thumbnail}`)
   // .setFooter(`Playing in ${message.member.voice.channel.name}`)







// ${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...


    message.channel.send(StartEmbed);
};