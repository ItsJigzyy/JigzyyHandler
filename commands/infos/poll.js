module.exports = {
    name: 'Poll',
    aliases: ['poll'],
    category: 'infos',
    utilisation: '{prefix}poll',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send(`You don't have permission to use this command! \n Permission Required: **__MANAGE MESSAGES__**`)
        message.delete().catch(O_o => { });
        const messageArray = message.content.split(' ');

        let pollChannel = message.mentions.channels.first();
        if (!pollChannel) return message.reply("Please mention a channel to send the Poll to.")
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new MessageEmbed()
            .setTitle("📊 **Poll Incoming!!** 📊")
            .setDescription(`**${pollDescription}**`)
            .setColor('#2C2F33')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('✅')
        await msgEmbed.react('❌')


    },
};