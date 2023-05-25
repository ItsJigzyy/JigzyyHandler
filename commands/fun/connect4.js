module.exports = {
    name: 'Connect4',
    aliases: ['c4'],
    category: 'Fun',
    utilisation: '{prefix}c4',

    async execute(client, message, args) {

        const { XOPConnect4 } = require("xoppack")
        const { MessageEmbed } = require("discord.js");


        if (!args[0]) return message.reply("Please @ a user...")
        new XOPConnect4({ message: message, opponent: message.mentions.users.first(), embed: { color: `${color}`, }, emojis: { player1: '🔴', player2: '🟡' }, turnMessage: '**Its Now {player} Turn!**', winMessage: '**{winner} Won The Game!**', gameEndMessage: '**The Game Was Unfinished!**', drawMessage: '**The Game Ended With A Draw!**', askerMessage: '**Hey {opponent}, {challenger} Challenged You For A Game Of Connect 4!**', cancelMessage: '**Looks Like They Didn\`t Want To Play!**', timerEndMessage: '**Since The Opponent Didnt Answer I Ended The Game!**', }).startGame();

    },
};