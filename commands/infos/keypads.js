module.exports = {
    name: 'Keypads',
    aliases: ['kaypad', 'key'],
    category: 'Infos',
    utilisation: '{prefix}keypads',

    execute(client, message) {

        const { MessageEmbed } = require("discord.js");
        const keypadEmbed = new MessageEmbed()
            .setDescription("When you paste a dupe, the keypads are automatically reset meaning they have no code.\nTo get the keypads working, open your Keypad Toolgun\nTick the 3 boxes: `Secure Mode`, `Weld`, `Freeze`\nNow where it says `Access Key` you need to enter the same key you have your fading door set to\nIf your fading door key is set to `Mouse4` then your Access Key must also be `Mouse4`\nSet your unique code, you can use 4 digits `1-9`")
            .setFooter(`If you need further help, please open a support ticket!`)
            .setColor("BLACK")
        message.channel.send(keypadEmbed);
    },
};