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
                 id: message.guild.id,
                 null : ['SEND_MESSAGES'],
              },
             ],);
            const embed = new MessageEmbed()
            .setAuthor(`Xcel Channel Updates`, message.guild.iconURL())
            .setTitle("Lockdown deactivated!")
            .setDescription(`🔓 ${message.channel} has been Unlocked 🔓`)
            .setColor("#08ff00")
            .setFooter(`Deactivation authorised by ${message.author}`)
            .setImage("https://tenor.com/view/kamen-rider-wizard-kamen-rider-wizard-%E4%BB%AE%E9%9D%A2%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC%E3%82%A6%E3%82%A3%E3%82%B6%E3%83%BC%E3%83%89-%E4%BB%AE%E9%9D%A2%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC-gif-21086885")
            await message.channel.send(embed);
            message.delete();
         
    },
};