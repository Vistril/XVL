const { Command } = require('discord-akairo');

class PickCommand extends Command {
    constructor() {
        super('pick', {
            aliases: ['pick'],
            args: [
                {
                    id: 'items',
                    match: 'content'
                }
            ]
        });
    }

    exec(m, args) {
        const items = args.items.split('|');
        const picked = items[Math.floor(Math.random() * items.length)]
        return m.util.send(`I picked ${picked.trim()}!`);
    }
}

module.exports = PickCommand;
