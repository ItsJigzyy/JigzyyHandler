module.exports = {
    name: 'Rules',
    aliases: ['Rule'],
    category: 'Mod',
    utilisation: '{prefix}rules',

   async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js");


message.delete().catch(O_o => { });

const rulesEmbed = new MessageEmbed()
    .setColor('#2C2F33')
    .setTitle("**__Xcel's Guidelines:__**")
    .setDescription(`*The only set of rules we have in our server is to be professional and a good person*\nSimply act as if this was a professional eSports organization because we will treat you like you are professional eSports team.\nFollow the things below...\n
    ~ Professional Attitude!\n
    ~ No Bigoted Attitudes!\n
    ~ And have some fun!
    `)
    .setFooter("Failure to follow our rules may result in a mute or ban!")

try {
    message.channel.send(rulesEmbed);
} catch {
    message.reply(`Sorry, I cannot respond due to an issue`)
}

},
};