module.exports = {
    name: 'Say',
    aliases: ['say'],
    category: 'Mod',
    utilisation: '{prefix}say <message>',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission to use this command! \n Permission Required: **__MANAGE MESSAGES__**`)
        const sayMessage = args.join(" ");

        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });

        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);


    },
};