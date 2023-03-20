const fs = require('fs');
const discord = require('discord.js');
const Discord = require("discord.js");
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS], disableMentions: 'everyone' });

const { Player } = require('discord-player');

const db = require("quick.db"); // npm i quick.db
const config = require("./config.json");
const table = new db.table("Tickets");

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🤝welcomes🤝');
    if (!channel) return message.channel.send("Cannot find the welcome channel or an error has occured :confused:");
    let WelcomeEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Hey <@${member.user.id}>, welcome to the Xcel Server. Have a look around :grin:`)
        .setFooter(`Xcel League`)
        .setTimestamp()
    // \`\`\`css\n${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}\`\`\`

    channel.send(WelcomeEmbed).catch(err => console.log(err));
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋goodbyes👋');
    if (!channel) return message.channel.send("Cannot find the leave channel or an error has occured :confused:");
    let LeaveEmbed = new MessageEmbed()
        .setColor('RANDOM')
        
        .setDescription(`We'll miss you, <@${member.user.id}>. Make sure to come back one day. 🙂💕`)
        .setFooter(`Xcel League`)
        .setTimestamp()
    // \`\`\`css\n${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}\`\`\`

    channel.send(LeaveEmbed).catch(err => console.log(err));
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

client.on('message', async function (message) {

    if (message.channel.type === "dm") {
        const dbTable = new db.table("Tickets");
        if (message.author.bot) return;
        if (message.content.includes("@everyone") || message.content.includes("@here")) return message.author.send(":x: I'm sorry, but you can not use everyone/here mentions in a modmail ticket")
        let active = await dbTable.get(`support_${message.author.id}`)
        let guild = client.guilds.cache.get(config.guild);
        let channel, found = true;
        let user = await dbTable.get(`isBlocked${message.author.id}`);
        if (user === true || user === "true") return message.react("❌");
        if (active === null) {
            active = {};
            let everyone = guild.roles.cache.get(guild.roles.everyone.id);
            let bot = guild.roles.cache.get(config.roles.bot);
            await dbTable.add("ticket", 1)
            let actualticket = await dbTable.get("ticket");
            channel = await guild.channels.create(`${message.author.username}-${message.author.discriminator}`, { type: "text" })
            // message.guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {type: "text"})
            channel.setParent(config.ticketCategory);
            channel.setTopic(`#${actualticket} | Use ${config.prefix}complete to close this ticket | ${message.author.username}'s ticket`)
            // config.roles.mod.forEach(moderator => {
            //    let modrole = guild.roles.cache.get(config.roles.mod);
            //    if (!modrole) {
            //       //  console.warn("I could not fetch this role. Does it exist? Is this the right role ID?")
            //   } else {
            //        channel.createOverwrite(modrole, {
            //            VIEW_CHANNEL: true,
            //            SEND_MESSAGES: true,
            //            READ_MESSAGE_HISTORY: true
            //        });
            //    }
            //})
            channel.createOverwrite(everyone, {
                VIEW_CHANNEL: false
            });

            const author = message.author;
            const newTicket = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(author.tag, author.avatarURL({ dynamic: true }))
                .setTitle(`Ticket #${actualticket}`)
                .addField("Channel", `<#${channel.id}>`, true)
            let supportServer = client.guilds.cache.get(config.guild);
            supportServer.channels.cache.get(config.log).send({ embed: newTicket })

            const UserSend = new MessageEmbed()
                .setAuthor(`${author.tag}`)
                .setTitle(`Thank you for contacting the EXL support team, we'll reply as soon as possible!`)
                .setDescription(`While you wait for a response, please explain the reason for opening the ticket so we can help resolve any issues sooner`)
                .setColor("GREEN")
                .setFooter(`Your ticket ID is #${actualticket}`)
                .setTimestamp()

            const newChannel = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setAuthor(author.tag, author.avatarURL())
                .setDescription(`Ticket **#${actualticket}** created\nUser: ${author}\nID: ${author.id}`)
                .setTimestamp()

            // \`\`\`

            try {
                supportServer.channels.cache.get(channel.id).send({ embed: newChannel });
                await supportServer.channels.cache.get(channel.id).send("```Modmail Commands:\n\n$reply <message> - replies to ticket as you (Your Discord: <reply message here>)\n$areply <message> - replies to ticket anonymously (Support Team: <reply message here>)\n$pause - pauses the ticket, neither you or the user will be able to reply\n$continue - unpauses the ticket, both you and the user will be able to reply\n$id - gets the Ticket owner's Discord ID (needed for blacklisting users)\n$block - blacklists the owner of the ticket from making tickets\n$unblock <owner id> - unblacklists a member from making tickets\n$complete - closes the ticket, deletes the channel```")
                await supportServer.channels.cache.get(channel.id).send("<@!713929311488311369>")

            } catch (e) {
                supportServer.channels.cache.get(channel.id).send(`This ticket was created by ${author.tag}.`)
            }
            message.author.send(UserSend)
            active.channelID = channel.id; // ^ This message is sent to a user when they DM the bot 
            active.targetID = author.id;
        }
        channel = client.channels.cache.get(active.channelID);
        var msg = message.content;
        var isPaused = await dbTable.get(`suspended${message.author.id}`);
        var isBlocked = await dbTable.get(`isBlocked${message.author.id}`);
        if (isPaused === true) {
            return message.channel.send("Sorry, but your ticket is currently paused. I'll message you back when the support team unpause it.")
        }
        if (isBlocked === true) return; // the user is blocked, so we're just gonna move on.
        if (message.attachments.size > 0) {
            let attachment = new Discord.MessageAttachment(message.attachments.first().url)
            try {
                client.channels.cache.get(active.channelID).send(`**${message.author.username}** > ${msg}`, { files: [message.attachments.first().url] })
            } catch (e) {
                if (e) client.guilds.cache.get(config.guild).channels.cache.get(active.channelID).send(`**${message.author.username}** > ${msg}`, { files: [message.attachments.first().url] })
            }
        } else {
            try {
                client.channels.cache.get(active.channelID).send(`**${message.author.username}** > ${msg}`); //  > ${text}  or ${msg}
            } catch (e) {
                if (e) client.guilds.cache.get(config.guild).channels.cache.get(active.channelID).send(`${message.author.username}`)
            }
        }
        await dbTable.set(`support_${message.author.id}`, active);
        await dbTable.set(`supportChannel_${active.channelID}`, message.author.id);
        return;
    }
    if (message.author.bot) return;
    var table = new db.table("Tickets");
    var support = await table.get(`supportChannel_${message.channel.id}`);
    let supportServer = client.guilds.cache.get(config.guild);
    if (support) {
        var support = await table.get(`support_${support}`);
        let supportUser = client.users.cache.get(support.targetID);
        if (!supportUser) return message.channel.delete();

        // reply (with user and role)
        if (message.content.startsWith(`${config.prefix}reply`)) {
            var isPause = await table.get(`suspended${support.targetID}`);
            let isBlock = await table.get(`isBlocked${support.targetID}`);
            if (isPause === true) return message.channel.send("This ticket is paused. Do $continue to resume")
            if (isBlock === true) return message.channel.send("The user is blocked. Unblock them to continue or close the ticket.")
            var args = message.content.split(" ").slice(1)
            let msg = args.join(" ");
            message.react("✅");
            if (message.attachments.size > 0) {
                let attachment = new Discord.MessageAttachment(message.attachments.first().url)
                return supportUser.send(`**${message.author.username}**: ${msg}`, { files: [message.attachments.first().url] })
            } else {
                return supportUser.send(`**${message.author.username}**: ${msg}`);
            }
        };

        // anonymous reply
        if (message.content.startsWith(`${config.prefix}areply`)) {
            var isPause = await table.get(`suspended${support.targetID}`);
            let isBlock = await table.get(`isBlocked${support.targetID}`);
            if (isPause === true) return message.channel.send(":pause_button: This ticket is paused. Do $continue to resume")
            if (isBlock === true) return message.channel.send("The user is blocked. Unblock them to continue or close the ticket.")
            var args = message.content.split(" ").slice(1)
            let msg = args.join(" ");
            message.react("✅");
            return supportUser.send(`**Support Team:** ${msg}`);
        };

        // print user ID
        if (message.content === `${config.prefix}id`) {
            return message.channel.send(`:id: User's ID is **${support.targetID}**.`);
        };

        // suspend a thread
        if (message.content === `${config.prefix}pause`) {
            var isPause = await table.get(`suspended${support.targetID}`);
            if (isPause === true || isPause === "true") return message.channel.send("This ticket already paused. Unpause it to continue.")
            await table.set(`suspended${support.targetID}`, true);
            var suspend = new Discord.MessageEmbed()
                .setDescription(`⏸️ This ticket has been **locked** and **suspended**. Do \`${config.prefix}continue\` to cancel.`)
                .setTimestamp()
                .setColor("YELLOW")
            message.channel.send({ embed: suspend });
            return client.users.cache.get(support.targetID).send("Your ticket has been paused. We'll send you a message when we're ready to continue.")
        };

        // continue a thread
        if (message.content === `${config.prefix}continue`) {
            var isPause = await table.get(`suspended${support.targetID}`);
            if (isPause === null || isPause === false) return message.channel.send("This ticket was not paused.");
            await table.delete(`suspended${support.targetID}`);
            var c = new Discord.MessageEmbed()
                .setDescription("▶️ This ticket has been **unlocked**.")
                .setColor("GREEN").setTimestamp()
            message.channel.send({ embed: c });
            return client.users.cache.get(support.targetID).send("Hi! Your ticket isn't paused anymore. We're ready to continue!");
        }

        // complete
        if (message.content.toLowerCase() === `${config.prefix}complete`) {
            var embed = new Discord.MessageEmbed()
                .setDescription(`This ticket will be deleted in **10** seconds...\n:lock: This ticket has been locked and closed.`)
                .setColor("RED").setTimestamp()
            message.channel.send({ embed: embed })
            var timeout = 10000
            setTimeout(() => { end(support.targetID); }, timeout)
        }
        async function end(userID) {
            let actualticket = await table.get("ticket");
            message.channel.delete()
            const u = await client.users.fetch(userID);
            let end_log = new Discord.MessageEmbed()
                .setColor("RED").setAuthor(u.tag, u.avatarURL())
                .setDescription(`Ticket #${actualticket} closed.\nUser: ${u.username}\nID: ${userID}`)
                .setTimestamp()
            await table.delete(`support_${userID}`);
            supportServer.channels.cache.get(config.log).send({ embed: end_log });
            return client.users.cache.get(support.targetID).send(`Thanks for getting in touch with us. If you wish to open a new ticket, feel free to message me.\nYour ticket #${actualticket} has been closed.`)
        }

        // block a user
        if (message.content.startsWith(`${config.prefix}block`)) {
            var args = message.content.split(" ").slice(1)
            let reason = args.join(" ");
           
            if (!reason) reason = `Unspecified.`
            let user = client.users.fetch(support.targetID); // djs want a string here
            const blockedLog = new Discord.MessageEmbed()
                .setColor("000000")
                .setDescription(`User blacklisted from ModMail`)
                .addField("Ticket:", `<#${message.channel.id}>`, true)
                .addField("Reason:", reason, true)
                .setFooter(`Do '$unblock ${support.targetID}' to unblacklist`)
            supportServer.channels.cache.get(config.log).send({ embed: blockedLog });

            let isBlock = await table.get(`isBlocked${support.targetID}`);
            if (isBlock === true) return message.channel.send("The user is already blocked.")
            await table.set(`isBlocked${support.targetID}`, true);
            var c = new Discord.MessageEmbed()
                .setDescription(":x: The user has been blocked from the modmail. You may now close the ticket or unblock them to continue.")
                .setColor("RED").setTimestamp()
            message.channel.send({ embed: c });
            return;
        }

        if (message.content.startsWith(`${config.prefix}unblock`)) {
            //if (message.guild.member(message.author).roles.cache.has(config.roles.mod)) {
            var args = message.content.split(" ").slice(1);
            client.users.fetch(`${args[0]}`).then(async user => {
                let data = await table.get(`isBlocked${args[0]}`);
                if (data === true) {
                    await table.delete(`isBlocked${args[0]}`);
                    return message.channel.send(`Successfully unblocked ${user.username} (${user.id}) from the modmail service.`);
                } else {
                    return message.channel.send(`${user.username} (${user.id}) is not blocked from the modmail at the moment`)
                }
            }).catch(err => {
                if (err) return message.channel.send(`I don't know what has happened here :confused:\nMake sure you're uisng the correct User ID, do ${config.prefix}id!`);
            })
        }
    };
});




client.login(client.config.discord.token);