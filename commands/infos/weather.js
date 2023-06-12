module.exports = {
    name: 'Weather',
    aliases: ['weather'],
    category: 'Infos',
    utilisation: '{prefix}weather <location>',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const weather = require('weather-js');
        const Discord = require("discord.js")
        const query = args.join(" ");

        if (!query) return message.reply({ content: 'Please specify a location | *Example: $weather London UK*' })

        weather.find({ search: query, degreeType: 'F' }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.reply({ embeds: [error] });
            if (result === undefined || result.length === 0) return message.reply({ content: 'Invalid location | *Example: $weather Florida USA*' });

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor({ name: `Weather forecast for ${current.observationpoint}` })
                .setThumbnail(current.imageUrl)
                .setColor('#2C2F33')
                .addFields(
                    {
                        name: "Timezone",
                        value: `UTC ${location.timezone}`,
                        inline: true,
                    },
                    {
                        name: "Degree Type",
                        value: `Fahrenheit`,
                        inline: true,
                    },
                    {
                        name: "Temperature",
                        value: `${current.temperature}°`,
                        inline: true,
                    },
                    {
                        name: "Wind",
                        value: `${current.winddisplay}`,
                        inline: true,
                    },
                    {
                        name: "Feels Like",
                        value: `${current.feelslike}°`,
                        inline: true,
                    },
                    {
                        name: "Humidity",
                        value: `${current.humidity}%`,
                        inline: true,
                    },
                )
            message.channel.send({ embeds: [weatherinfo] })
        })
    },
};  