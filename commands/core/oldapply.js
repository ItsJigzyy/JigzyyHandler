module.exports = {
    name: 'Apply',
    aliases: ['Ap'],
    category: 'Mod',
    utilisation: '{prefix}apply',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");

        message.delete().catch(O_o => { });

        if (message.author.bot) return;

        const questions = [
            `We have many positions you can apply for in Xcel League (Moderator, Staff, League Director, etc), which would you like to apply for?`,
            `Please list your GamerTag:`,
            `Why do you have interest in this position?`,
            `Have you had this role before in any other Organisation? If so, which Org?`,
            `What region are you from?`,
            `What is your availability on the weekends?`,
            `Are there any other qualifications that you think we should know about you while considering your application?`];
        const dmChannel = await message.author.send("**Xcel is always looking to promote more people** \n *If you are interested, please answer the questions below:*");
        const collector = dmChannel.channel.createMessageCollector((msg) => message.author.id === msg.author.id);
        let i = 0;
        const res = [];

        message.reply("Please check your DMs...")
        dmChannel.channel.send(questions[0])

        collector.on('collect', async (message) => {
            if (questions.length === i) return collector.stop('MAX');
            const answer = message.content;
            res.push({ question: questions[i], answer });
            i++;
            if (questions.length === i) return collector.stop('MAX');
            else {
                dmChannel.channel.send(questions[i]);
            }
        });

        await collector.on('end', async (collected, reason) => {
            if (reason == 'MAX') {

                const data = client.channels.cache.get(`843973754702659614`); //XCEL - 843973754702659614
                const user = message.author;

                let applyEmbed = new MessageEmbed()

                    .setTitle(`${message.author.tag} has submitted an application!`)
                    .setDescription(`${res.map(d => `> **${d.question}** \n\n ${d.answer} \n`).join("\n")}`)
                    .setTimestamp()
                    .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
                    .setColor('#ff331f')
                    .setFooter("End of application")



                await data.send(applyEmbed)
                await message.author.send("Your application has been sent to Xcel Leadership :smile:")
            }
        })

    },
};