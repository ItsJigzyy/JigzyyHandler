module.exports = {
    name: 'LuaPanic',
    aliases: ['lua'],
    category: 'Infos',
    utilisation: '{prefix}lua',

    execute(client, message) {
        message.channel.send('Close Garrys Mod\nRight click on Garrys Mod in Steam\nClick Properties\nClick the `BETAS` tab then click the drop down box and select `x86-64 - Chromium + 64-bit binaries`\nThen reboot your game.');
    },
};