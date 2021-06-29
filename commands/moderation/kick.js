module.exports = {
    name: 'Kick',
    aliases: [''],
    category: 'Moderation',
    utilisation: '{prefix}kick <@user>',

    execute(client, message, args) {

        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("You don't have permission to use this command!");

        let user = message.mentions.users.first();

        let member = message.guild.member(user);
        let reason = args.slice(1).join(" ");

        if (!user) return message.reply("Please mention a user in the server.");
        if (user.id === message.author.id) return message.reply("You can't kick yourself :man_facepalming:");
        if (user.id === client.user.id) return message.reply("You can't kick me bitch!");

        if (!reason) reason = "No reason provided.";

        member.kick(reason).then(() => {

            kickEmbed = new MessageEmbed()
                .setTitle(`**${message.author.tag} (ID: ${message.author.id})**`)
                .setDescription(`
        👢**Kicked**: ${user.tag} *(ID: ${user.id})*
        📋**Reason**: ${reason}
        `)
                .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)

            message.channel.send(kickEmbed)
            // message.channel.send(`**${user.tag}** was kicked from the server for ${reason}!`);
        }).catch(err => {
            message.reply("I was unable to kick that member :confused:");
        })





    },
};