module.exports = {
    name: 'Timer',
    aliases: ['time'],
    category: 'Infos',
    utilisation: '{prefix}timer 12h',

    execute(client, message, args) {

        const Discord = module.require('discord.js');
        const ms = require('ms');
        let Timer = args[0];

        if (!args[0]) {
            return message.channel.send("❌ " + "| Please enter a time period followed by **s**, **m** or **h**");
        }

        if (args[0] <= 0) {
            return message.channel.send("❌ " + "| Please enter a time period followed by **s**, **m** or **h**");
        }

        message.channel.send(" Timer Started for: " + `${ms(ms(Timer), { long: true })}`)

        setTimeout(function () {
            message.channel.send(message.author.toString() + `The ${ms(ms(Timer), { long: true })} Timer Has Ended!`)

        }, ms(Timer));

    },
}
