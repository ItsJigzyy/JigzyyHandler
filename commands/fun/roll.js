module.exports = {
    name: 'Roll',
    aliases: ['dice'],
    category: 'Fun',
    utilisation: '{prefix}roll',

    async execute(client, message, args) {

function dice() {
    var rand = [`1`, `2`, `3`, `4`, `5`, `6`];

    return rand[Math.floor(Math.random() * rand.length)];
}
message.reply(dice())

    },
};