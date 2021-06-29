const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const db = require("quick.db"); // npm i quick.db


client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

const { MessageEmbed } = require("discord.js");

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🤝welcomes🤝');
    if (!channel) return message.channel.send("Cannot find the welcome channel or an error has occured :confused:");
    let WelcomeEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${member.user.tag} has joined the server!`)
        .setDescription(`Hey, don't forget to check out <#804222389214511134>`)
        .setFooter(`Xcel League`)
        .setTimestamp()
    // \`\`\`css\n${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}\`\`\`

    channel.send(WelcomeEmbed).catch(err => console.log(err));
})


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//  Message Content Includes: 


client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Morning")) {
        message.channel.send("Good morning!");
    }
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Gm")) {
        message.channel.send("Good morning!");
    }
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Gn")) {
        message.channel.send("Goodnight!");
    }
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Goodnight")) {
        message.channel.send("Goodnight!");
    }
});



client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Night")) {
        message.channel.send("Goodnight!");
    }
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("Bye")) { message.react('👋') }
});


















client.login(client.config.discord.token);