module.exports = {
    name: 'Help',
    aliases: ['commands'],
    category: 'Infos',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        const { MessageEmbed } = require("discord.js");

        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const mod = message.client.commands.filter(x => x.category == 'Mod').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const custom = message.client.commands.filter(x => x.category == 'Custom').map((x) => '`' + x.name + '`').join(', ');
            const backups = message.client.commands.filter(x => x.category == 'Backup').map((x) => '`' + x.name + '`').join(', ');
            // const owner = message.client.commands.filter(x => x.category == 'Owner').map((x) => '`' + x.name + '`').join(', ');

            HelpEmbed = new MessageEmbed()
                .setColor('#FFFFFF')
                .setAuthor({ name: "Help Hub" })
                .setDescription(`For more information about a command, do ${client.config.discord.prefix}help <command name here>`)
                .addFields(
                    {
                        name: "Information:",
                        value: infos,
                        inline: false,
                    },
                    {
                        name: "Fun:",
                        value: fun,
                        inline: false,
                    },
                )
                .setFooter({ text: `JigzDupes`, iconURL: client.user.displayAvatarURL() })
                .setTimestamp(new Date())

            message.reply({ embeds: [HelpEmbed] })


        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send({ content: `${client.emotes.error} I can't find this command?` });

            ExtraHelp = new MessageEmbed()
                .setColor('#FFFFFF')
                .setAuthor({ name: "Help Hub" })
                .setDescription('Find information on the command provided\nMandatory arguments `[]`, optional arguments `<>`')
                .addFields(
                    {
                        name: "Command:",
                        value: command.name,
                        inline: true,
                    },
                    {
                        name: "Category:",
                        value: command.category,
                        inline: true,
                    },
                    {
                        name: "Utilisation:",
                        value: `${command.utilisation}`.replace('{prefix}', client.config.discord.prefix),
                        inline: true,
                    },
                    {
                        name: "Aliase(s):",
                        value: `${command.aliases.length}` < 1 ? 'None' : command.aliases.join(', '),
                        inline: true,
                    }
                )
                .setFooter({ text: `Jigzyy#6385` })
                .setTimestamp(new Date())

            message.reply({ embeds: [ExtraHelp] })

        };
    },
};  