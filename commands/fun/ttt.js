module.exports = {
    name: 'Tic Tac Toe',
    aliases: ['Tic'],
    category: 'Fun',
    utilisation: '{prefix}ttt',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const { tictactoe } = require('reconlx')

        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Please specify a member')

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}
