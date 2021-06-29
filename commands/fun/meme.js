module.exports = {
    name: 'Meme',
    aliases: ['Memes'],
    category: 'Fun',
    utilisation: '{prefix}meme',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

const fetch = require('node-fetch');
fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(async json => {
        let msg = await message.channel.send('Fetching a Meme...')
        const memeEmbed = new MessageEmbed()
            .setColor('#ff331f')
            .setTitle(json.title)
            .setImage(json.url)
            .setFooter(`Link: ${json.postLink} | SubReddit: ${json.subreddit}`);

        msg.edit(memeEmbed);
    });

},
};