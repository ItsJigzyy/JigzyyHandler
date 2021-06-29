module.exports = {
    name: 'Kill',
    aliases: ['Murder'],
    category: 'Fun',
    utilisation: '{prefix}kill',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        let user = message.mentions.users.first();


        if (!user) return message.reply("Who's the target?...")

        if (user.id === message.author.id) return message.reply("You can't kill yourself :man_facepalming:")
        if (user.id === client.user.id) return message.reply("Haha, Monty is covering me. *I am the walking Mira* ");

        function snipe() {
            var rand = [`\n ${user} is Dead`, `\n ${user} escaped, try again when they're less suspicious...`];

            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.reply(snipe())
    },
};
