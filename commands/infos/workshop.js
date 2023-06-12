module.exports = {
    name: 'Workshop',
    aliases: ['ws'],
    category: 'Infos',
    utilisation: '{prefix}ws',

    execute(client, message) {
        message.reply({ content: `https://steamcommunity.com/sharedfiles/filedetails/?id=1942976934` });
    },
};  