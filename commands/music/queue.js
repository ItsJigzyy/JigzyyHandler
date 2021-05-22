module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {

        const { Client, MessageEmbed } = require("discord.js");
        const queue = client.player.getQueue(message);

        const StartEmbed = new MessageEmbed()
            .setTitle(`**Server queue - ${message.guild.name} ${client.emotes.queue}**`)   // \**
            .setColor("#ff331f")
            .setDescription(`Current: ${queue.playing.title}\n\n ` + (queue.tracks.map((track, i) => {
                return `**#${i + 1}** - ${track.title} (requested by : ${track.requestedBy.username})`
            }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs` : `In the playlist **${queue.tracks.length}** song(s)`}`))
            .setFooter(`Playing in ${message.member.voice.channel.name}`)


        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);


        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

        message.channel.send(StartEmbed);
    }
}