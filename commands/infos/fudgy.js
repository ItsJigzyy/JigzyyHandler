module.exports = {
    name: 'Fudgy',
    aliases: ['invite'],
    category: 'Infos',
    utilisation: '{prefix}Fudgy',

    execute(client, message) {
        message.channel.send(`https://discord.gg/fudgydarkrp`);
    },
};