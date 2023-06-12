module.exports = {
    name: 'Bcreate',
    aliases: ['create'],
    category: 'Backup',
    utilisation: '{prefix}bcreate',

    async execute(client, message, args) {
        const backup = require('discord-backup');
        const { MessageEmbed } = require("discord.js");


        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send({ content: ':x: You need to have Administator permissions to create a backup in this server!' });
        }

        backup.create(message.guild).then((backupData) => {

            return message.channel.send({ content: 'Backup created! Here is your ID: `' + backupData.id + '` Use `$bload ' + backupData.id + '` to load the backup on another server!' });

        })
    },
};  