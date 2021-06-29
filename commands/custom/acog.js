module.exports = {
    name: 'Acog',
    aliases: [],
    category: 'Custom',
    utilisation: '{prefix}acog',

    execute(client, message) {

        function reply() {
            var rand = [`:0`, `:O`];
    
            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.channel.send(reply())

        
    },
};