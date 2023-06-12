module.exports = {
    name: 'Ban',
    aliases: ['Ban'],
    category: 'Mod',
    utilisation: '{prefix}ban @user',

    async execute(client, message, args) {

        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({ content: "You don't have permission to use this command!" })
        let user = message.guild.members.cache.get(message.mentions.users.first()) //|| message.guild.members.cache.get(args[0])


        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "No reason specified"
        }

        if (!user) return message.reply({ content: "Please mention a valid member in the server." });
        if (user.id === client.user.id) return message.reply({ content: "You can't ban me!" });  // Author can't ban bot
        if (user.id === message.author.id) return message.reply({ content: "You can't ban yourself :man_facepalming:" }); // Author can't ban Author
        if (user.id === '713929311488311369') return message.reply({ content: "You can't ban my daddy! <:SovietPepe:1097754298055659530>" });



        user.ban({ reason: banReason }).then(() => {
            message.channel.send({ content: `**${user}** was banned from the server for **${banReason}**!` });

        })

    },
};  