module.exports = {
    name: 'Steam',
    aliases: ['lookup'],
    category: 'Infos',
    utilisation: '{prefix}steam',

    execute(client, message, args) {


        const { MessageEmbed } = require('discord.js')
        const { stripIndents } = require('common-tags');
        const fetch = require('node-fetch');
        const steamToken = process.env.STEAM; //get steam api key from the .env


        //check if there is an account name to search for
        const id = args[0]
        if (!args[0]) return message.channel.send({ content: "Please provide a `Steam64 ID`!" });
        if (isNaN(args[0][0])) return message.channel.send({ content: "Steam ID 64 only please!" })

        const summaries = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=BC580EBEADC00101830C85129E45ECC4&steamids=${id}`; //set thr url for summaries of the user by id
        const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=BC580EBEADC00101830C85129E45ECC4&steamids=${id}`; //set the url for bans of the user by id
        const state = ['Offline', 'Online', 'Busy', 'Away', 'Snooze', 'Looking to trade', 'Looking to play']; //array of user statuses

        fetch(summaries).then(results => results.json()).then(body => {
            // if the user is not found send a message to the channel
            if (body.response.success === 42) return message.channel.send({ content: 'Unable to find a steam profile with that ID\nMake sure its the Steam ID 64!' });
            if (!body.response) return message.channel.send({ content: 'Unable to find a steam profile with that name!' });

            //get user info of the first result
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

            const embed = new MessageEmbed()
                .setColor("#2C2F33")
                .setAuthor({ name: `Steam | ${personaname}`, iconURL: avatarfull })
                .setThumbnail(avatarfull)
                .setDescription(stripIndents`**Real Name:** ${realname || 'Name Not Found'}
                    **Status:** ${state[personastate]}
                    **Country:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : 'white'}:
                    **Link:** [${personaname}'s Profile](${profileurl})`) //hyperlink syntax for embeds
                .setTimestamp()
                .setFooter({ text: `JigzDupes`, iconURL: client.user.displayAvatarURL() });
            message.channel.send({ embeds: [embed] });

        });
    },
};  