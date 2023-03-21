module.exports = {
    name: 'Giveaway',
    aliases: ['gway'],
    category: 'Core',
    utilisation: '{prefix}giveaway ', // FINISH THIS <<<<<

   async execute(client, message, args) {

    const { MessageEmbed } = require("discord.js");

if (message.member.hasPermission('ADMINISTRATOR')) {



    const ms = require('ms');

    if (!args[0]) return message.reply('You did not specify your time | 1m, 2h, 3d etc')
    if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) return message.reply("You did not use the correct formatting for the time!")
    if (isNaN(args[0][0])) return message.reply("That is not a number!")
    let channel = message.mentions.channels.first()
    if (!channel) return message.reply("I could not find that channel | Please # the channel")
    let prize = args.slice(2).join(" ")
    if (!prize) return message.reply("A prize was not specified!")
    message.channel.send(`**Giveaway created successfully in ${channel}!**`)

    let Giveawayembed = new MessageEmbed()

        .setTitle("A giveaway has started | Good Luck!")
        .setDescription(`**${message.author}** is hosting a giveaway with a prize of **${prize}**`)
        .setTimestamp(Date.now() + ms(args[0]))
        .setFooter("Ends on:")
        .setColor('#2C2F33')

    let m = await channel.send(Giveawayembed)
    m.react("🤞")
    setTimeout(() => {
        console.log(m.reactions.cache.size)
        if (m.reactions.cache.size === 0) return message.channel.send(`No one entered the **${prize}** giveaway? 😕`)
        let winner = m.reactions.cache.get("🤞").users.cache.filter(u => !u.bot).random()

        let WinnerEmbed = new MessageEmbed()

            .setTitle("🎉**__Giveaway Ended!__**🎉")
            .addField('Winner:', `${winner}`)
            .addField('Prize:', `${prize}`)
            .setTimestamp(Date.now() + ms(args[0]))
            .setColor("GREEN")
            .setFooter("Ended:")


        channel.send(WinnerEmbed)

    }, ms(args[0]));


} else {
    message.reply("Only admins can make giveaways!")
}

},
};