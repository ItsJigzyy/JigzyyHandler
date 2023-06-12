const discord = require('discord.js');
const db = require('quick.db');
const { MessageEmbed, messageCreate } = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return
    //const id = '1086976240394719322'
    //const user = message.mentions.users.first()

    if (db.has(`afk-${message.author.id}`)) {
        const info = db.get(`afk-${message.author.id}`)
        await db.delete(`afk-${message.author.id}`)

        const WelcomeBackEmbed = new MessageEmbed()
            .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setDescription(`Welcome back!\nAFK Status: **OFF**`)
            .setColor('WHITE');
        message.channel.send({ embeds: [WelcomeBackEmbed] })
            .then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
    };

    if (message.mentions.users.first()) {
        if (db.has(`afk-${message.mentions.users.first().id}`)) {
            message.delete().catch(O_o => { });
            message.channel.send({ content: `${message.mentions.members.first()} is AFK 🚫\nReason: ` + db.get(`afk-${message.mentions.users.first().id}`), allowedMentions: { repliedUser: false } })
        } else return;
    };


    const prefix = client.config.discord.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (message.content.indexOf(prefix) !== 0) return;

    const cooldowns = new Map();

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000

    if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000;

            return message.channel.send({ content: `Please wait ${time_left.toFixed(1)} before using ${command.name} again!` });
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    if (cmd) cmd.execute(client, message, args, cmd);



};  
