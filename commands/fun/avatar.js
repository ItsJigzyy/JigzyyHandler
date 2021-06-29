module.exports = {
    name: 'Avatar',
    aliases: ['Av'],
    category: 'Fun',
    utilisation: '{prefix}avatar',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (args[0]) {
            const user = message.mentions.users.first();
            if (!user) return message.reply('Please mention a member to get their profile picture.');

            const otheravatarEmbed = new MessageEmbed()
                .setColor('#ff331f')
                .setImage(user.displayAvatarURL());

            return message.channel.send(otheravatarEmbed).catch(err => console.log(err));
        }

        const avatarEmbed = new MessageEmbed()
            .setImage(message.author.displayAvatarURL());

        return message.channel.send(avatarEmbed).catch(err => console.log(err));
    },
};