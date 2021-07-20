module.exports = {
    name: 'Report',
    aliases: ['rep'],
    category: 'Mod',
    utilisation: '{prefix}report',

    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");


        message.delete().catch(O_o => { });

        if (message.author.bot) return;

        const questions = [`What's the players GamerTag:`, `What's the players Discord:`, `Why are you reporting this player? (MnK, DDoS, Extreme Toxicity etc)`, `When did these events occur?`, `Do you have evidence to backup this accusation?`, `Did anyone else witness this happen?`, `Do you give permission for us to use this info against the accused player?`]; // <-- Questions here:
        const dmChannel = await message.author.send("**If you feel like someone is cheating or you have suspicions about someone in one of our tournaments** \n *Please answer the questions below:*");
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

                const data = client.channels.cache.get(`843041802135142401`);
                const user = message.author;

                let applyEmbed = new MessageEmbed()

                    .setTitle(`${message.author.tag} has reported a player!`)
                    .setDescription(`${res.map(d => `> **${d.question}** \n\n ${d.answer} \n`).join("\n")}`)
                    .setTimestamp()
                    .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
                    .setColor('#ff331f')
                    .setFooter("End of report")



                await data.send(applyEmbed)
                await message.author.send("Your report has been sent to BigFace :smile:")
            }
        })

    },
};