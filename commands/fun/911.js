module.exports = {
    name: '911',
    aliases: ['911'],
    category: 'Fun',
    utilisation: '{prefix}911',

    async execute(client, message, args) {

        message.delete().catch(O_o => { });
        message.channel.send(':skull_crossbones: 😳 **Airplane has been hijacked!** 😳...:skull_crossbones:   ')
            .then(message => {

                message.edit("✈️                       🏢");

                message.edit("      ✈️                 🏢");

                message.edit("            ✈️           🏢");

                message.edit("                  ✈️     🏢");

                message.edit("                  ✈️ 🏢");

                message.edit(" 💥💥💥😳 *BOOM* 😳💥💥💥");

                message.edit(":skull_crossbones: __**Allahu Akbar!**__ :skull_crossbones:");

                message.edit(":skull_crossbones: __**MASHALLAH!**__ :skull_crossbones:");

                message.edit(":skull_crossbones: __**Allahu Akbar!**__ :skull_crossbones:");

                message.edit("*Jigzyy was the pilot...*");

                message.delete().catch(O_o => { });
            });

    },
}
