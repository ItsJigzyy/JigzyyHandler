module.exports = {
    name: 'Jayy',
    aliases: ['Jay'],
    category: 'Custom',
    utilisation: '{prefix}jayy',

    execute(client, message) {

        function reply() {
            var rand = [`CYA LATER STINKY`, `🤮`];
    
            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.channel.send(reply())

        
    },
};