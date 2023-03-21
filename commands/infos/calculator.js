module.exports = {
    name: 'Calculator',
    aliases: ['calc'],
    category: 'Infos',
    utilisation: '{prefix}calculator',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const math = require('mathjs');


        if (!args[0]) return message.reply("Please provide a question.");

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.reply("Please provide a **valid** question.")
        }

        const CalcEmbed = new MessageEmbed()
            .setColor('#ff331f')
            .setTitle('Calculator')
            .addField('Question:', `\`\`\`css\n${args.join('')}\`\`\``)
            .addField('Answer:', `\`\`\`css\n${resp}\`\`\``)

        message.reply(CalcEmbed);

    },
};