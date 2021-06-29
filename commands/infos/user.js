module.exports = {
    name: 'User',
    aliases: ['whois'],
    category: 'infos',
    utilisation: '{prefix}user',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

const moment = require('moment');

const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};




const member = message.mentions.members.first();

if (!member) return message.reply("You haven't mentioned a user for me to display...")

const roles = member.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);

const userStatus = {
    online: "Online",
    idle: "Idle/Inactive",
    dnd: "Busy/Do Not Disturb",
    offline: "Unavailable/Offline"
}

var presence = member.presence.activities.length ? member.presence.activities.filter(x => x.type === "PLAYING") : null;
const userFlags = member.user.flags.toArray();
const embed = new MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setColor(member.displayHexColor || '#ff331f')
    .addField('User', [
        `**❯ Username:** ${member.user.username}`,
        `**❯ Discriminator:** ${member.user.discriminator}`,
        `**❯ ID:** ${member.id}`,
        `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
        `**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
        `**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
        `**❯ Status:** ${userStatus[member.presence.status]}`,
        `**❯ Game:** ${presence && presence.length ? presence[0].name : 'None'}`,
        `\u200b`
    ])
    .addField('Member', [
        `**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
        `**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
        `**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
        `**❯ Roles [${roles.length}]:** ${roles.length < 20 ? roles.join(', ') : 'None'}`,
        `\u200b`
    ]);
return message.channel.send(embed);
},
};