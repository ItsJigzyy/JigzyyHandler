module.exports = {
    name: 'bcreate',
    aliases: ['create'],
    category: 'Backup',
    utilisation: '{prefix}bcreate',

    async execute(client, message, args) {
        const backup = require('discord-backup');
        const { MessageEmbed } = require("discord.js");


        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(':x: You need to have Administator permissions to create a backup in this server!');
        }

        backup.create(message.guild).then((backupData) => {

            return message.channel.send('Backup created! Here is your ID: `' + backupData.id + '` Use `$bload ' + backupData.id + '` to load the backup on another server!');

        }).catch(() => {

            return message.channel.send(':x: An error occurred, please report to the Support server ');

        });


    },
};