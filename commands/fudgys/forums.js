module.exports = {
    name: 'Forums',
    aliases: ['for'],
    category: 'Infos',
    utilisation: '{prefix}Forums',

    execute(client, message) {
        message.reply({ content: `https://fudgygaming.com/forums/index.php` });
    },
};  