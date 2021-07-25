module.exports = {
    name: 'Tic Tac Toe',
    aliases: ['Tic'],
    category: 'Fun',
    utilisation: '{prefix}ttt',

    async execute(client, message, args) {

        const ttt = require("discord.js-tictactoe")
        const embed_color = "#2C2F33"
        const start_cmd = "ttt"
        ttt.run(client, prefix, embed_color, start_cmd)

    }
}
