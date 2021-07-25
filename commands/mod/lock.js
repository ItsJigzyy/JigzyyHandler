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
                 id: message.guild.id,
                 deny : ['SEND_MESSAGES'],
              },
             ],);
            const embed = new MessageEmbed()
            .setAuthor(`Xcel Channel Updates`, message.guild.iconURL())
            .setTitle("Initiating lockdown!")
            .setDescription(`🔒 ${message.channel} has been Locked 🔒`)
            .setColor("#ff0000")
            .setFooter(`Lockdown authorised by ${message.author}`)
            .setImage("https://tenor.com/view/close-the-door-the-invisible-man-lock-the-door-shut-the-door-secure-the-door-gif-18790343")
            
            await message.channel.send(embed);
            message.delete();

         },
    };
