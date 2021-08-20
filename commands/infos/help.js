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

            HelpEmbed = new MessageEmbed()
                .setColor('#ff331f')
                .setAuthor("Xcel Help Hub")
                .setDescription(`For more information about a command, do ${client.config.discord.prefix}help <command name here>`)
                .addField(`Bot:`, `${infos}`)
                .addField(`Backup:`, `${backups}`)
                .addField(`Moderation:`, `${mod}`)
                .addField(`Fun:`, `${fun}`)
                .addField(`Music:`, `${music}`)
                .addField(`Custom Commands:`, `${custom}`)
                .setFooter(`The all-new Xcel Bot`)
                .setTimestamp(new Date())

            message.channel.send(HelpEmbed)


        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} I can't find this command?`);

            ExtraHelp = new MessageEmbed()
                .setColor('#2C2F33')
                .setAuthor("Xcel Help Hub")
                .setDescription('Find information on the command provided\nMandatory arguments `[]`, optional arguments `<>`')
                .addField(`Command:`, `${command.name}`, true)
                .addField(`Category:`, `${command.category}`, true)
                .addField(`Aliase(s):`, `${command.aliases.length}` < 1 ? 'None' : command.aliases.join(', '), true)
                .addField(`Utilisation:`, `${command.utilisation}`.replace('{prefix}', client.config.discord.prefix), true)
                .setFooter("Jigzyy#6385")
                .setTimestamp(new Date())

            message.channel.send(ExtraHelp)

        };
    },
};