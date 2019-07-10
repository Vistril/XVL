const { Command } = require('discord-akairo');
const { execSync } = require('child_process');
class RestartCommand extends Command {
	constructor() {
		super('restart', {
			aliases: ['restart']
		});
	}

	exec(m) {
		if (m.author.id != this.client.ownerID) return;
		m.delete();
		m.channel.send(':warning: Restarting in 3 seconds');
		setTimeout(() => {
			execSync('pm2 restart 1');
		}, 3000);
	}
}

module.exports = RestartCommand;
