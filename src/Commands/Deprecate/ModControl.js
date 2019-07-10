const { Command } = require('discord-akairo');

class ModSendCommand extends Command {
	constructor() {
		super('sendtochat', {
			aliases: ['sendtochat'],
			split: 'quoted',
			args: [
				{
					id: 'channelid',
					type: 'string',
					default: '441340010843602946'
				},
				{
					id: 'message',
					type: 'string',
					default: 'Whoever ran this command last was an idiot and didn\'t include an input. Shame on them!'
				}
			]
		});
	}

	exec(m, args) {
		if (m.channel.id == '556977288416329728' || m.channel.id == '481626980245045259') {
			try {
				this.client.channels.get(args.channelid).send(args.message);
			} catch (e) {
				m.channel.send(e);
			}
		} else {
		}
		this.client.channels.get('577246293072543756').send(m.author.username + ': ' + args.message);
	}
}

module.exports = ModSendCommand;
