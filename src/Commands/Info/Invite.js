const { Command } = require('discord-akairo');

class Invite extends Command {
	constructor() {
		super('invite', {
			aliases: ['icanhasbot', 'invite']
		});
	}

	exec(m) {
		let ch = m.channel.id;
		m.util.send('Want a Nate of your own? https://discordapp.com/api/oauth2/authorize?client_id=456309210913832964&permissions=1597369456&scope=bot');
		this.client.channels.get(ch).send('Link sent!');
	}
}

module.exports = Invite;
