module.exports = {
    name: 'Props',
    aliases: ['proplimit', 'limit', 'prop'],
    category: 'Infos',
    utilisation: '{prefix}props',

    execute(client, message) {
        message.reply({ content: `Default: 60\nVIP: 65\nVIP+: 70\nMVP: 80\nGOAT: 90` });
    },
};  