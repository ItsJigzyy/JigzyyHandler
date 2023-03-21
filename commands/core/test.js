module.exports = {
    name: 'Test',
    aliases: ['testing'],
    category: 'Core',
    utilisation: '{prefix}test', // FINISH THIS <<<<<

   async execute(client, message, args) {

message.channel.send(`${message.author}, I am online with a ping of **${client.ws.ping}ms**!`)
   },
};