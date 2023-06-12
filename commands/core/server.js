module.exports = {
    name: 'Server',
    aliases: ['server'],
    category: 'Core',
    utilisation: '{prefix}server',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        const moment = require('moment');

        const filterLevels = {
            DISABLED: 'Off',
            MEMBERS_WITHOUT_ROLES: 'No Role',
            ALL_MEMBERS: 'Everyone'
        };

        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: '(╯°□°）╯︵ ┻━┻',
            VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
        };

        const regions = {
            brazil: 'Brazil',
            europe: 'Europe',
            hongkong: 'Hong Kong',
            india: 'India',
            japan: 'Japan',
            russia: 'Russia',
            singapore: 'Singapore',
            southafrica: 'South Africa',
            sydeny: 'Sydney',
            'us-central': 'US Central',
            'us-east': 'US East',
            'us-west': 'US West',
            'us-south': 'US South'
        };


        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const embed = new MessageEmbed()
            .setDescription(`**Guild information for __${message.guild.name}__**`)
            .setColor('#ffffff')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
                {
                    name: "General",
                    value: `**❯ Name:** ${message.guild.name}`,
                    value: `**❯ ID:** ${message.guild.id}`,
                    value: `**❯ Owner:** ${message.guild.ownerId.tag} (${message.guild.ownerId})`,
                    value: `**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                    value: `**❯ Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
                    value: `**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
                    value: `**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
                    inline: true,
                },
                {
                    name: "Statistics",
                    value: `**❯ Role Count:** ${roles.length}`,
                    value: `**❯ Emoji Count:** ${emojis.size}`,
                    value: `**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                    value: `**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                    value: `**❯ Member Count:** ${message.guild.memberCount}`,
                    value: `**❯ Humans:** ${members.filter(member => !member.user.bot).size}`,
                    value: `**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
                    value: `**❯ Text Channels:** ${channels.filter(channel => channel.type === "UNKNOWN").size}`,
                    value: `**❯ Voice Channels:** ${channels.filter(channel => channel.type === "UNKNOWN").size}`,
                    value: `**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                    inline: true,
                },
                // {
                //    name: "Presence",
                //   value: `**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                //   value: `**❯ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                //  value: `**❯ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                //  value: `**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                //  inline: false,
                // },
            )
            .setFooter({ text: `${message.guild.members.me.displayName}`, iconURL: client.user.displayAvatarURL() })
        message.channel.send({ embeds: [embed] });

    },
};  