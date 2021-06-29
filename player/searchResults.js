module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#2C2F33',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Jigzyy, Dev of Eris and Xcel bots' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};