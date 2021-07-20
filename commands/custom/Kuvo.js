module.exports = {
    name: 'Kuvo',
    aliases: ['vKxvo'],
    category: 'Custom',
    utilisation: '{prefix}kuvo',

    execute(client, message) {

        function reply() {
            var rand = [`*vKxvo is a simp...*`, `"Pxppy is the best R6 champ" - vKxvo`];
    
            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.channel.send(reply())

        
    },
};