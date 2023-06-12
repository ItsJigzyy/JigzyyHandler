module.exports = {
    name: 'Poll',
    aliases: ['poll'],
    category: 'Infos',
    utilisation: '{prefix}poll <channel> <poll message>',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (!message.member.permissions.has('MANAGE_MESSAGES'))
            return message.channel.send({ content: `You don't have permission to use this command! \n Permission Required: **__MANAGE MESSAGES__**` })
        message.delete().catch(O_o => { });
        const messageArray = message.content.split(' ');

        let pollChannel = message.mentions.channels.first();
        if (!pollChannel) return message.reply({ content: "Please mention a channel to send the Poll to." })
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new MessageEmbed()
            .setTitle("📊 **Poll:**")
            .setDescription(`**${pollDescription}**`)
            .setColor('#2C2F33')
        let msgEmbed = await pollChannel.send({ embeds: [embedPoll] });
        await msgEmbed.react('✅')
        await msgEmbed.react('❌')


    },
};  