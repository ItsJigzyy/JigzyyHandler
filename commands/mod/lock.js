module.exports = {
    name: 'Lock',
    aliases: ['Lockdown'],
    category: 'Mod',
    utilisation: '{prefix}lock',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return message.channel.send("You don't have the required permissions to authorise this command")
        }
        message.channel.overwritePermissions([
            {
                id: '714190667558944849',
                deny: ['SEND_MESSAGES'],
                deny: ['ADD_REACTIONS'],
            },
            {
                id: '714190667558944849',
                allow: ['READ_MESSAGES'],
                allow: ['VIEW_CHANNEL'],
                allow: ['READ_MESSAGE_HISTORY'],
            },
        ]);
        const embed = new MessageEmbed()
            .setAuthor(`Xcel Channel Updates`, message.guild.iconURL())
            .setTitle("Initiating lockdown!")
            .setDescription(`🔒 ${message.channel} has been Locked 🔒`)
            .setColor("#ff0000")
            .setFooter(`Lockdown authorised by ${message.author.tag}`)

        await message.channel.send(embed);
        message.delete();

    },
};
