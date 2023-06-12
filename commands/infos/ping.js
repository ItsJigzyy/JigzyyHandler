module.exports = {
    name: 'Ping',
    aliases: ['ms'],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.reply({ content: `Ping: **${client.ws.ping}ms**!` });
    },
};  