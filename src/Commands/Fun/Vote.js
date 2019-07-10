const { Command } = require('discord-akairo');

class VoteCommand extends Command {
    constructor() {
        super('vote', {
            aliases: ['vote'],
            args: [
                {
                    id: "question",
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    async exec(m) {
        let up = '521141871406481418';
        let down = '521141889869545502';
        let circle = '⚪';
        await m.react(up);
        await m.react(circle);
        await m.react(down);
    }
}

module.exports = VoteCommand;
