module.exports = {
    name: 'Jordan',
    aliases: ['jordanbecker'],
    category: 'Custom',
    utilisation: '{prefix}jordan',

    execute(client, message) {

        function reply() {
            var rand = [`Hey sexy mama 😏💞`, `Hey cute stuff 😩💞`, `Hey milf:bangbang::revolving_hearts:`, `Hey sexy thang:sparkles::revolving_hearts:`];
    
            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.channel.send(reply())

        
    },
};