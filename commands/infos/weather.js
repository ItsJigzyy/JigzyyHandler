module.exports = {
    name: 'User',
    aliases: ['whois'],
    category: 'infos',
    utilisation: '{prefix}user',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");
        const weather = require('weather-js');

        weather.find({ search: args.join(" "), degreeType: 'F' }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Please specify a location')

            if (result === undefined || result.length === 0) return message.channel.send('Invalid location');

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor('#2C2F33')
                .addField('Timezone', `UTC ${location.timezone}`, true)
                .addField('Degree Type', 'Fahrenheit', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', `${current.winddisplay}`, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
    },
};