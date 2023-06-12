module.exports = {
    name: 'Kick',
    aliases: ['Kick'],
    category: 'Mod',
    utilisation: '{prefix}kick @user',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");


        if (!message.member.permissions.has("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR"))
            return message.reply({ content: "You don't have permission to use this command!" });

        let user = message.mentions.users.first();

        let member = message.guild.members.cache.get(user);
        let reason = args.slice(1).join(" ");

        if (!user) return message.reply({ content: "Please mention a user in the server." });
        if (user.id === message.author.id) return message.reply({ content: "You can't kick yourself :man_facepalming:" });
        if (user.id === client.user.id) return message.reply({ content: "You can't kick me bitch!" });
        if (user.id === '713929311488311369') return message.reply({ content: "You can't kick my daddy! <:SovietPepe:1097754298055659530>" });

        if (!reason) reason = "No reason provided.";

        member.kick(reason).then(() => {

            kickEmbed = new MessageEmbed()
                .setTitle(`**${message.author.tag} (ID: ${message.author.id})**`)
                .setColor("#2C2F33")
                .setDescription(`
        👢**Kicked**: ${user.tag} *(ID: ${user.id})*
        📋**Reason**: ${reason}
        `)
                .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)


            message.channel.send({ embeds: [kickEmbed] })
            // message.channel.send({ content: `**${user.tag}** was kicked from the server for ${reason}!` });
        }).catch(err => {
            message.reply({ content: "I was unable to kick that member :confused:" });
        })
    },
};  