module.exports = {
    name: 'Flip',
    aliases: ['Coin'],
    category: 'Fun',
    utilisation: '{prefix}flip',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        function Flip() {
            var rand = ['**HEADS**', '**TAILS**'];

            return rand[Math.floor(Math.random() * rand.length)];
        }
        const flipEmbed = new MessageEmbed()
            .setColor("#ff331f")
            .setTitle(`${Flip()}`)

        message.reply(flipEmbed)
    },
};