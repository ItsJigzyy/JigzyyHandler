module.exports = {
    name: '911',
    aliases: ['911'],
    category: 'Fun',
    utilisation: '{prefix}911',

    async execute(client, message, args) {

        message.delete().catch(O_o => { });
        message.channel.send(':skull_crossbones: 😳 **Airplane has been hijacked!** 😳...:skull_crossbones:   ')
            .then(message => {
                setTimeout(function() {
                message.edit("✈️                       🏢");
            }, 3000);
            setTimeout(function() {
                message.edit("      ✈️                 🏢");
            }, 3000);
            setTimeout(function() {
                message.edit("            ✈️           🏢");
            }, 3000);
            setTimeout(function() {
                message.edit("                  ✈️     🏢");
            }, 3000);
            setTimeout(function() {
                message.edit(" 💥💥💥😳 *BOOM* 😳💥💥💥");
            }, 3000);
            setTimeout(function() {
                message.edit(":skull_crossbones: __**Allahu Akbar!**__ :skull_crossbones:");
            }, 3000);
            setTimeout(function() {
                message.edit(":skull_crossbones: __**MASHALLAH!**__ :skull_crossbones:");
            }, 3000);
                setTimeout(function() {
                message.edit(":skull_crossbones: __**Allahu Akbar!**__ :skull_crossbones:");
            }, 3000);
                setTimeout(function() {
                message.edit("*Jigzyy was the pilot...*");
            }, 3000);
                message.delete().catch(O_o => { });
            });

    },
}
    