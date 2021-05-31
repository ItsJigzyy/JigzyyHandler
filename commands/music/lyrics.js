module.exports = {
    name: 'lyrics',
    aliases: ["ly"],
    category: 'Music',
    utilisation: '{prefix}lyrics [Artist name]',

    execute(client, message, args) {

        const lyricsFinder = require("lyrics-finder");
        const { Client, MessageEmbed } = require("discord.js");
        module.exports.run = async (client, message, args, searcher) => {
        
            if (args.length < 1) return message.reply("Please enter the Artist's name first. ~lyrics <Artist Name Here>")
        
            let artist = args.join(" ");
            let songName = '';
            let pages = [];
            let currentPage = 0;
        
            const messageFilter = m => m.author.id === message.author.id;
            const reactionFilter = (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && (message.author.id === user.id)
        
            message.channel.send("Please enter the song name now...");
            await message.channel.awaitMessages(messageFilter, { max: 1, time: 15000 }).then(async collected => {
                songName = collected.first().content;
                await finder(artist, songName, message, pages)
            })
        
            const lyricEmbed = await message.channel.send(`Lyrics page: ${currentPage + 1}/${pages.length}`, pages[currentPage])
            await lyricEmbed.react('⬅️');
            await lyricEmbed.react('➡️');
        
            const collector = lyricEmbed.createReactionCollector(reactionFilter);
        
            collector.on('collect', (reaction, user) => {
                if (reaction.emoji.name === '➡️') {
                    if (currentPage < pages.length - 1) {
                        currentPage += 1;
                        lyricEmbed.edit(`Lyrics page: ${currentPage + 1}/${pages.length}`, pages[currentPage]);
                    }
                } else if (reaction.emoji.name === '⬅️') {
                    if (currentPage !== 0) {
                        currentPage -= 1;
                        lyricEmbed.edit(`Lyrics page: ${currentPage + 1}/${pages.length}`, pages[currentPage])
                    }
                }
            })
        }
        
        async function finder(artist, songName, message, pages){
            let fullLyrics = await lyricsFinder(artist, songName) || "No results...";
        
            for (let i = 0; i < fullLyrics.length; i += 2048){
                const lyric = fullLyrics.substring(i, Math.min(fullLyrics.length, i + 2048))
                const msg = new MessageEmbed()
                .setDescription(lyric)
                pages.push(msg);
            }
        }


    }
}