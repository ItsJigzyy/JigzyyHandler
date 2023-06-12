module.exports = {
    name: 'Calculator',
    aliases: ['calc'],
    category: 'Infos',
    utilisation: '{prefix}calculator',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const math = require('mathjs');


        if (!args[0]) return message.reply({ content: "Please provide a question." });

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.reply({ content: "Please provide a **valid** question." })
        }

        const CalcEmbed = new MessageEmbed()
            .setColor('BLACK')
            .setTitle('Calculator')
            .addFields(
                {
                    name: "Question:",
                    value: `\`\`\`css\n${args.join('')}\`\`\``,
                    inline: false,
                },
                {
                    name: "Answer:",
                    value: `\`\`\`css\n${resp}\`\`\``,
                    inline: false,
                },
            )

        message.reply({ embeds: [CalcEmbed] });

    },
};  