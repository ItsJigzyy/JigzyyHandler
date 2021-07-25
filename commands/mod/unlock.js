module.exports = {
    name: 'Unlock',
    aliases: [''],
    category: 'Mod',
    utilisation: '{prefix}unlock',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return message.channel.send("You don't have the required permissions to authorise this command")
            }
            message.channel.overwritePermissions([
              {
                 id: '714190667558944849',
                 null : ['SEND_MESSAGES'],
              },
             ],);
            const embed = new MessageEmbed()
            .setAuthor(`Xcel Channel Updates`, message.guild.iconURL())
            .setTitle("Lockdown deactivated!")
            .setDescription(`🔓 ${message.channel} has been Unlocked 🔓`)
            .setColor("#08ff00")
            .setFooter(`Deactivation authorised by ${message.author.tag}`)
            await message.channel.send(embed);
            message.delete();
         
    },
};