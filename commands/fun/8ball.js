module.exports = {
    name: '8ball',
    aliases: ['8b'],
    category: 'Fun',
    utilisation: '{prefix}8ball <question>',

    execute(client, message, args) {

        function doMagic8BallVoodoo() {
            var rand = [':8ball: Yes', ':8ball: No', ':8ball: Maybe', ':8ball: Of course', ":8ball: I don't think so",];

            return rand[Math.floor(Math.random() * rand.length)];
        }

        message.reply(doMagic8BallVoodoo())

    },
};