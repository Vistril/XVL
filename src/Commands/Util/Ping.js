const { Command } = require('discord-akairo');
const h = require('node-http-ping');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            args: [
                {
                    id: 'query',
                    type: 'string',
                    default: 'discordapp.com'
                }
            ]
        });
    }

    exec(m, args) {
        m.util.send(`:ping_pong: Pong! | Ping to Discord: ${Math.round(this.client.ping)}`);
        /*else {
           h.ping(args.query, 80)
                .then(c => m.channel.send(`${Math.round / c}ms to ${input}`))
                .catch(console.error);
        }*/
    }
}

module.exports = PingCommand;
