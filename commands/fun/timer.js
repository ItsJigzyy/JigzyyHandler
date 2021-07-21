module.exports = {
    name: 'Timer',
    aliases: ['Time'],
    category: 'Fun',
    utilisation: '{prefix}timer',

    async execute(client, message, args) {

        message.delete();

        let count = Number(args.pop());

        if (!Number.isInteger(count) || count < 1) {
            message.reply(client.invalidArguments);

            return;
        }

        let content = args.join(' ');
        let tick = 1000;

        message.channel.send(this.formatBomb(count)).then(msg => {
            let timer = client.setInterval(() => {
                if (count > 0) {
                    count--;
                    msg.edit(this.formatBomb(count));
                } else {
                    clearInterval(timer);
                    msg.edit(':boom:');
                    client.setTimeout(() => {
                        msg.edit(content);
                    }, tick);
                }
            }, tick);
        });


       // formatBomb(count) {
      //      return `:bomb: ${'-'.repeat(count)} ${count}`;
      //  }
    },
};

