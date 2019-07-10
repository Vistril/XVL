const { Command } = require('discord-akairo');

class ReloadCommand extends Command {
    constructor() {
        super('reload', {
            aliases: ['reload'],
            args: [{
                id: 'command',
                type: 'commandAlias'
            }]
        });
    }

    async exec(m, { command }) {
        if (m.author.id != this.client.ownerID) {
            await m.react('⛔');
            m.delete();
        } else {
            if (!command) {
                await m.reply('Unknown command.');
                await m.delete()
            }

            command.reload();
            await m.channel.send(`Command "${command.id}" reloaded.`);
            await m.delete();
        }
    }
}

module.exports = ReloadCommand;