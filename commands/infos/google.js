module.exports = {
    name: 'Google',
    aliases: ['ggl'],
    category: 'Infos',
    utilisation: '{prefix}ggl <what you would like to search for>',
    execute(client, message, args) {

        const query = encodeURIComponent(args.join(" "));
        const url = `https://www.google.com/search?q=${query}`;
        if (!query) return message.reply({ content: "What would you like to Google?" })

        message.reply({ content: `Here is the link to what you searched for:\n` + url });

    },
};
