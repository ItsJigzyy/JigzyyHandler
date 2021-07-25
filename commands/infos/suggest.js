module.exports = {
    name: 'Suggest',
    aliases: ['sgest'],
    category: 'Infos',
    utilisation: '{prefix}suggest <suggestion>',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const SuggestChannel = client.channels.cache.get('841427656138162186'); // ID of channel you want to suggest to
        const suggestMessage = args.join(" ");

        message.delete().catch(O_o => { });

        let suggestEmbed = new MessageEmbed()

            .setAuthor(`Suggested by: ${message.author.tag}`)
            .setDescription(suggestMessage)
            .setFooter("React with one of the emoji's to vote on it being added")
            .setColor("#2C2F33")

        let msgEmbed = await SuggestChannel.send(suggestEmbed);

        await msgEmbed.react('✅')
        await msgEmbed.react('❌')

    },
};