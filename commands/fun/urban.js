module.exports = {
    name: 'Urban',
    aliases: ['Lookup'],
    category: 'Fun',
    utilisation: '{prefix}urban',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const urban = require('urban');
        

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
            const def = new MessageEmbed()
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