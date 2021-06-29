module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'infos',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const mod = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(', ');
            const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const custom = message.client.commands.filter(x => x.category == 'Custom').map((x) => '`' + x.name + '`').join(', ');


            message.channel.send({
                embed: {
                    color: '#ff331f',
                    author: { name: 'Xcel Help Hub' },
                    footer: { text: 'Xcel & Eris Embedded' },
                    fields: [
                        { name: 'Bot:', value: infos },
                        { name: 'Fun:', value: fun },
                        { name: 'Music:', value: music },
                        { name: 'Moderation:', value: mod },
                        { name: 'Custom Commands', value: custom },
                        // { name: 'Filters:', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `The all-new Xcel bot, revamped with the Eris bot`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} I can't find this command?`);

            message.channel.send({
                embed: {
                    color: '#2C2F33',
                    author: { name: 'Xcel Help Hub' },
                    footer: { text: 'Jigzyy#6385' },
                    fields: [
                        { name: 'Command:', value: command.name, inline: true },
                        { name: 'Category:', value: command.category, inline: true },
                        { name: 'Aliase(s):', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation:', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};