module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - I stopped the music because there is no one to play it to :pleading_face: `);
};