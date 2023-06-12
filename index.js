const fs = require('fs')
const discord = require('discord.js');
const { Collection, Client, MessageEmbed, MessageAttachment, Intents, messageCreate } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
    ],
    partials: [
        'CHANNEL',
        'USER',
        'GUILD_MEMBER',
        'MESSAGE',
        'REACTION',
        'GUILD_SCHEDULED_EVENT',
        'THREAD_MEMBER',
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
});
const Captcha = require("@haileybot/captcha-generator");
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.commands = new discord.Collection();


/**
 * @param {import('discord.js').GuildMember} member
 */

client.on('guildMemberAdd', async member => {

    const welcome_channel_id = "1086986116189651056"
    const welcomeChannel = member.guild.channels.cache.get(welcome_channel_id)
    const verify_channel_id = "1087709484337614878"
    const rule_channel_id = "1087651422855770142"
    const verifyChannel = member.guild.channels.cache.get(verify_channel_id)
    const rulesChannel = member.guild.channels.cache.get(rule_channel_id)
    const Unverified_role_id = "1086981725848080434"
    let UnverifiedRole = member.guild.roles.cache.find(r => r.id === Unverified_role_id)
    member.roles.add(UnverifiedRole)
    let welcomeMsg = new MessageEmbed()
        //.setTitle(`👋 New Member!`)
        .setDescription(`Welcome **${member.user}**!\nPlease read ${rulesChannel} & ${verifyChannel}!`)
        .setColor("#2C2F33")
    welcomeChannel.send({ embeds: [welcomeMsg] })
    let captcha = new Captcha()
    const attachment = new MessageAttachment(captcha.PNGStream, "captcha.png")
    let verificationMsg = new MessageEmbed()
        .setTitle(`Human Verification Required!`)
        .setDescription("Hello there!\nPlease type in the captcha shown below `Case sensitive | Upper-Case only`\nYou have 5 minutes to complete the captcha, if you can't solve it within the amount of time given, please rejoin the server!")
        .setImage(`attachment://captcha.png`)
        .setColor("RED")
        .setFooter({ text: `JigzDupes`, iconURL: client.user.displayAvatarURL() })
    verifyChannel.send({ embeds: [verificationMsg], files: [attachment] })
    await verifyChannel.send({ content: `${member.user}`, allowedMentions: {} })
    const collector = new discord.MessageCollector(verifyChannel, m => m.member.id === m.member.id, { time: 300000 });
    collector.on("collect", m => {
        if (m.content === captcha.value) {
            let successMsg = new MessageEmbed()
                .setTitle(`✅ Verification Complete`)
                .setDescription(`You now have access to the rest of the server`)
                .setFooter({ text: `DM JigzDupes to open a ticket!` })
                .setColor("GREEN")
            verifyChannel.send({ embeds: [successMsg] })
            const verified_role_id = "1086981643702652950"
            let verifiedRole = member.guild.roles.cache.find(r => r.id === verified_role_id)
            member.roles.add(verifiedRole)
            member.roles.remove(UnverifiedRole)
        }
    });
})

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '╹👋╻goodbyes');
    if (!channel) return message.channel.send({ content: "Cannot find the leave channel or an error has occured :confused:" });
    let LeaveEmbed = new MessageEmbed()
        .setColor('#2C2F33')
        .setDescription(`Goodbye, ${member.user}. We'll miss you 💕`)
        .setFooter({ text: `JigzDupes`, iconURL: client.user.displayAvatarURL() })
        .setTimestamp()

    channel.send({ embeds: [LeaveEmbed] })
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

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

// MODMAIL
const charModMail = require('char-mod-mail');

client.on("ready", () => {
    charModMail.ModMail(client, {
        guildID: "1086976240394719322",
        categoryID: "1087657287792992306",
        staffRole: "1086981450441699359", // Owner Role or Staff
        embedColor: "#2C2F33", // HEX
        anonymousReply: false,
        closedTitle: "Your support ticket has been closed!",
        closedMessage: "Thanks for getting in touch with us. If you wish to open a new ticket, message me!",
        staffOpenedTitle: "User Opened Mod Mail",
        staffOpenedMessage: "Waiting for a response!",
        userOpenedTitle: "Thank you for contacting the JigzDupes support team, we'll reply as soon as possible!",
        userOpenedMessage: "While you wait for a response, please explain the reason for opening the ticket so we can help resolve any issues sooner",
        wrongEmoji: "❌",
        rightEmoji: "✔️"
    })
});


client.login(client.config.discord.token);