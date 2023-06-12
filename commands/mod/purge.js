module.exports = {
    name: 'Purge',
    aliases: ['pg'],
    category: 'Mod',
    utilisation: '{prefix}purge <number>',

    async execute(client, message, args) {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({ content: `You don't have permission to use this command! \n Permission Required: **__MANAGE MESSAGES__**` })

        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply({ content: "Please provide a number between 2 and 100 for the number of messages to delete" });

        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply({ content: `Couldn't delete messages because of: ${error}` }));

    },
};  