module.exports = {
    name: 'Ban',
    aliases: [''],
    category: 'moderation',
    utilisation: '{prefix}ban <@user>',

    execute(client, message, args) {


        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to use this command!")

        let user = message.guild.member(message.mentions.users.first()) //|| message.guild.members.cache.get(args[0])

        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "No reason specified"
        }

        if (!user) return message.reply("Please mention a valid member in the server.");
        if (user.id === client.user.id) return message.reply("You can't ban me!");  // Author can't ban bot
        if (user.id === message.author.id) return message.reply("You can't ban yourself :man_facepalming:"); // Author can't ban Author

        user.ban({ reason: banReason }).then(() => {
            message.channel.send(`**${user}** was banned from the server for **${banReason}**!`);

        })
    },
};