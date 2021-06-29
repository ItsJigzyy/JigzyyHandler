module.exports = {
    name: 'Embed',
    aliases: ['Emb'],
    category: 'Mod',
    utilisation: '{prefix}embed',

    execute(client, message, args) {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission to use this command! \n Permission Required: **__MANAGE MESSAGES__**`)
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });

        const Discord = require("discord.js")


        try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send("Reply `skip` for next question, Reply `cancel` to stop the command.");


            //===============================================================================================
            // Getting Title
            message.channel.send("So, do you want your embed to have any title? If so, what do you want it as?");
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);

            //===============================================================================================
            // Getting Description
            message.channel.send("Great, now do you want your embed to have any Description? If so, what do you want it as?");
            let Description = await message.channel.awaitMessages(filter, options);
            if (Description.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);

            //===============================================================================================
            // Getting Footer
            message.channel.send("So, Do you want your embed to have any Footer? If so, what do you want it as?");
            let Footer = await message.channel.awaitMessages(filter, options);
            if (Footer.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled. ')
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content);

            //===============================================================================================
            // Getting URL


            //===============================================================================================
            // Getting Color
            message.channel.send("So, Do you want your embed to have any specific color? *[Default is Black]*\nIf so, what do you want it as? `#12FF34`");
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")

            //===============================================================================================
            // Getting Author Field
            message.channel.send("So, Do you want your embed to have any Author Field? If so, what do you want it as?");
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);

            //===============================================================================================
            // Getting TimeStamp
            message.channel.send("So, Do you want your embed to have any TimeStamp? Reply `Yes` or `no`  *[Cap sensitive]*");
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();

            message.channel.send(embed)
        } catch (error) {
            console.error(error);
        }

    },
};