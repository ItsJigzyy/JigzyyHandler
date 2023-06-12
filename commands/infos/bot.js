module.exports = {
    name: 'Bot',
    aliases: ['Bot'],
    category: 'Infos',
    utilisation: '{prefix}bot',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const Discord = require("discord.js")
        const { version } = require("discord.js");
        const moment = require("moment");
        const m = require("moment-duration-format");
        let os = require('os')
        let cpuStat = require("cpu-stat")
        const ms = require("ms")


        //command
        let cpuLol;
        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new MessageEmbed()
                .setAuthor({ name: client.user.username })
                .setTitle("__**Stats:**__")
                .setColor("RANDOM")
                .addFields(
                    { name: '⏳ Mem Usage', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, inline: false },
                    { name: '⌚️ Uptime', value: `${duration}`, inline: false },
                    { name: '📁 Users', value: `${client.users.cache.size}`, inline: false },
                    { name: '📁 Channel', value: `${client.channels.cache.size}`, inline: false },
                    { name: '📁 Servers', value: `${client.guilds.cache.size}`, inline: false },
                    { name: '👾 Discord.js', value: `${version}`, inline: false },
                    { name: '🤖 Node', value: `${process.version}`, inline: false },
                    { name: '🤖 CPU', value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, inline: false },
                    { name: '💻 Platform', value: `\`\`${os.platform()}\`\``, inline: false },
                    { name: 'API Latency', value: `${(client.ws.ping)}ms`, inline: false },
                )
            message.channel.send({ embeds: [botinfo] })
        });
    },
};  