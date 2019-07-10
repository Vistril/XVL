const { Command } = require('discord-akairo');

class EchoCommand extends Command {
    constructor() {
        super('echo', {
            aliases: ['echo'],
            split: 'none',
            args: [
                {
                    id: "msg",
                    type: "string"
                }
            ]
        });
    }

    exec(m, args) {
        if (m.member.roles.find(r => ['Moderators', 'Mods', 'Admin'].includes(r.name)) != null || m.author.id == this.client.ownerID) {
            m.delete();
            m.channel.startTyping();
	    setTimeout(() => {
		m.channel.stopTyping();
		m.channel.send(args.msg);
	    }, ~~(Math.random() * 7800));
            this.client.channels.get('577246293072543756').send(`${m.author.tag} (#${m.channel.name}) : ${args.msg}`);
	} else {
		m.delete();
	}
    }
}

module.exports = EchoCommand;
