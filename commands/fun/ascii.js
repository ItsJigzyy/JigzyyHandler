module.exports = {
    name: 'ascii',
    aliases: ['ascii'],
    category: 'Fun',
    utilisation: '{prefix}ascii <message>',

    async execute(client, message, args) {

        const figlet = require("figlet");
        const text = args.join(" ");

        if (!text) {
            return message.channel.send("Provide some text for me...");
        }

        figlet.text(text, (e, txt) => {
            if (e) return;
            message.channel.send(`\`\`\` ${txt.trimRight()} \`\`\``);
        });

    },
};