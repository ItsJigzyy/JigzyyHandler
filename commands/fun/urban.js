module.exports = {
    name: 'Urban',
    aliases: ['Lookup'],
    category: 'Fun',
    utilisation: '{prefix}urban',

    async execute(client, message, args) {

        const urban = require('urban');
        const Discord = require('discord.js');

        if (args.length < 1) {
            return message.channel.send('Please enter a word');
        }
        let word = args.join(' ');
        console.log(word);

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('No such word exist!');
            }
            console.log(json);
            const def = new Discord.RichEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumb_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
        });
    },
};