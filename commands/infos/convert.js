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
            .addFields(
                {
                    name: "Steam ID:",
                    value: `${oldid}`,
                    inline: false,
                },
                {
                    name: "Steam ID 64:",
                    value: `${newsteamid}`,
                    inline: false,
                },
            )
            .setFooter({ text: `JigzDupes`, iconURL: client.user.displayAvatarURL() })
            .setTimestamp(new Date())

        if (!oldid) return message.channel.send({ content: "Please provide a Steam ID for me to convert!" });

        message.reply({ embeds: [IDEmbed] })

    },
};  