module.exports = {
    name: 'lyrics',
    aliases: ["ly"],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {

        const getArtistTitle = require('get-artist-title');
        const axios = require('axios');
        const cheerio = require('cheerio');
        const { Client, MessageEmbed } = require("discord.js");
        const baseURL = `https://api.genius.com/search?access_token=${client.config.discord.genius}`;
        let playlist;

        const scrapeLyrics = path => {
            return axios.get(path)
                .then(response => {
                    let $ = cheerio.load(response.data);
                    return [$('.header_with_cover_art-primary_info-title').text().trim(), $('.lyrics').text().trim()];
                })
                .catch(err => {
                    console.warn(err);
                });
        };

        const searchLyrics = url => {
            return Promise.resolve(axios.get(url, { 'Authorization': `Bearer ${client.config.discord.genius}` })
                .then(response => checkSpotify(response.data.response.hits))
                .then(path => scrapeLyrics(path))
                .catch(err => {
                    console.warn(err);
                })
            );
        };

        const checkSpotify = hits => {
            return hits[0].result.primary_artist.name === 'Spotify' ? hits[1].result.url : hits[0].result.url;
        };

        const createQuery = arg => {
            if (arg === 'np') {
                const query = [artist, title] = getArtistTitle(playlist.current, {
                    defaultArtist: ' '
                });
                console.log(query)
                return query.join(' ')
            } else return arg.slice(1).join(' ');
        };


        const query = createQuery(args[0]);
        searchLyrics(`${baseURL}&q=${encodeURIComponent(query)}`)
            .then(songData => {
                const embed = new MessageEmbed()
                    .setColor(0x00AE86)
                    .setTitle(`Lyrics for: ${songData[0]}`)
                    .setDescription(songData[1]);
                return message.channel.send({ embed });
            })
            .catch(err => {
                message.channel.send(`No lyrics found for: ${query} 🙁`, { code: 'asciidoc' });
                console.warn(err);
            });


    }
}