module.exports = {
    name: 'Fudgy',
    aliases: ['invite'],
    category: 'Infos',
    utilisation: '{prefix}Fudgy',

    execute(client, message) {
        message.reply({ content: `https://discord.gg/fudgydarkrp` });
    },
};  