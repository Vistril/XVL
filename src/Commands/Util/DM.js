const { Command } = require('discord-akairo');

class DM extends Command {
	constructor() {
		super('dm', {
			aliases: ['dm'],
			args: [
				{
					id: 'input',
					match: 'content'
				}
			]
		});
	}

	async exec(m, args) {
		await m.delete();
		let arg = args.input.split(' | ');
		if (m.member.roles.find(r => r.name === 'Moderators') != null || m.author.id == this.client.ownerID) {
			if (!args.input) { m.reply('Not enough arguments.');
			} else {
				this.client.users.get(arg[0]).send(arg[1]);
			}
		}
	}
}

module.exports = DM
