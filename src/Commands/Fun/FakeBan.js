const { Command } = require('discord-akairo');

class FakeBanCommand extends Command {
  constructor() {
    super('fakeban', {
      aliases: ['fakeban', 'bam'],
      split: 'none',
      args: [
        {
          id: "query",
          type: "string",
          default: "no one"
        }
      ]
    })
  }

  exec(m, args) {
    if (m.member.roles.find(r => ['Moderators', 'Mods', 'Admin'].includes(r.name)) != null || m.author.id == this.client.ownerID) {
      m.delete();
      m.channel.send(`**:white_check_mark: ${args.query} has been banned.**`);
    }
  }
}

module.exports = FakeBanCommand;
