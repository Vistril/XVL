const { Command } = require('discord-akairo');

class SetActivityCommand extends Command {
    constructor() {
        super('setact', {
            aliases: ['setactivity', 'setact'],
            split: 'none',
            args: [
                {
                    id: 'game',
                    type: 'string',
		            default: 'PornHub'
                }
            ]
        });
    }

    async exec(m, args) {
       if (m.member.roles.find(r => ['Moderators', 'Mods', 'Admin'].includes(r.name)) || m.author.id == this.client.ownerID) {
            await m.delete();
          //  await this.client.user.setActivity(args.game, { type: args.type })
            //    .then(presence => this.client.channels.get('577246293072543756').send(`(${m.author.tag}) Activity set to ${presence.game ? presence.game.name : 'none'}`))
              //  .catch(console.error);
	        await this.client.user.setActivity(args.game);
            this.client.channels.get('577246293072543756').send(`(${m.author.tag}) Activity set to ${args.game}`);
        }
    }
}

module.exports = SetActivityCommand;
