module.exports = {
    name: 'Ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ping: **${client.ws.ping}ms**!`);
    },
};