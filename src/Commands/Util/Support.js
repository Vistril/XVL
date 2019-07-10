const { Command } = require('discord-akairo');

class SupportCommand extends Command {
	constructor() {
		super('support', {
			aliases: ['support']
		});
	}

	async exec(m) {
		let ch = m.channel.id;
		await m.author.send('Have questions or concerns? Just want to chat? Join the development server: discord.gg/XscRvYT');
		await this.client.channels.get(ch).send('Invite sent!');
	}
}

module.exports = SupportCommand;
