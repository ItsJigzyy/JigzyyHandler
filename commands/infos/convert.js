module.exports = {
    name: 'Convert',
    aliases: ['cv'],
    category: 'Infos',
    utilisation: '{prefix}cv <STEAM ID>',

    execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const SteamID = require('steamid');
        const oldid = args[0]
        let newsteamid = new SteamID(oldid);
        const IDEmbed = new MessageEmbed()
            .setColor(`WHITE`)
            .addField(`Steam ID:`, `${oldid}`)
            .addField(`Steam ID 64:`, `${newsteamid}`)
            .setFooter(`${message.guild.me.displayName}`, client.user.displayAvatarURL())
            .setTimestamp(new Date())

        if (!oldid) return message.channel.send("Please provide a Steam ID for me to convert!");

        message.reply(IDEmbed)

    },
};