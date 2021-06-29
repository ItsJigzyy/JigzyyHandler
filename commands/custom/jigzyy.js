module.exports = {
    name: 'Jigzyy',
    aliases: [],
    category: 'Custom',
    utilisation: '{prefix}jigzyy',

    execute(client, message) {

        const { MessageEmbed } = require("discord.js");
        const figlet = require("figlet");
        const text = ('Jigzyy')

        figlet.text(text, (e, txt) => {
            if (e) return;


            JigzyyEmbed = new MessageEmbed()
                .setDescription(`\`\`\` ${txt.trimRight()} \`\`\``)
                .setColor("#2C2F33")
                .setFooter("Owner of all things Eris")

            message.channel.send(JigzyyEmbed);
        });

    },
};