module.exports = {
    name: 'Bload',
    aliases: ['load'],
    category: 'Backup',
    utilisation: '{prefix}bload <id>',

    async execute(client, message, args) {

        const backup = require('discord-backup');
        const { MessageEmbed } = require("discord.js");

        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send({ content: ':x: You need to have Administator permissions to load a backup in this server!' });
        }

        const backupID = args.join(' ');

        backup.fetch(backupID).then(() => {

            message.channel.send({ content: ':warning: All the server channels, roles, and settings will be cleared. Do you want to continue? Send `confirm` or `cancel`!' });

            const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['confirm', 'cancel'].includes(m.content), {
                time: 60000,
                max: 1
            });
            collector.on('collect', (m) => {
                const confirm = m.content === 'confirm';
                collector.stop();
                if (confirm) {

                    backup.load(backupID, message.guild).then(() => {

                        return message.author.send({ content: 'Backup loaded successfully!' });

                    }).catch((err) => {

                        if (err === 'No backup found')
                            return message.channel.send({ content: ':x: No backup found for ID ' + backupID + '!' });
                        else
                            return message.author.send({ content: ':x: An error occurred: ' + (typeof err === 'string') ? err : JSON.stringify(err) });

                    });

                } else {
                    return message.channel.send({ content: ':x: Cancelled.' });
                }
            })

            collector.on('end', (collected, reason) => {
                if (reason === 'time')
                    return message.channel.send({ content: ':x: Command timed out! Please retry.' });
            })

        }).catch(() => {
            return message.channel.send({ content: ':x: No backup found for ID ' + backupID + '!' });
        });


    },
};  