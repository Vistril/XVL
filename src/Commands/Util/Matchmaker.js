const { Command } = require('discord-akairo')

class Matchmaker extends Command {
  constructor() {
    super('matchmaker', {
      aliases: ['matchmaker', 'mm'],
      args: [
        {
          id: 'game',
          type: 'string'
        }
      ]
    });
  }

  exec(m, args) {
    const games = ['TF2', 'Minecraft', 'Terraria', 'BF2'];
    if (!games.includes(args.game)) {
      m.reply('Invalid arguments');
    } else {
      let r = m.guild.roles.get(m.guild.roles.find(x => x.name === args.game).id).members.map(x => x);
      let u = [];
      for (let i in r) {
        if (r[i].user.presence.status != 'offline') {
          u.push('<@' + r[i].id + '>');
        }
      }
      if (u.length === 0) {
        m.channel.send(`Hey ${u.join(', ')}! ${m.author} wants to play ${args.game}! `);
        u = [];
      } else {
        m.reply('That didn\'t work.');
      }
    }
  }
}

module.exports = Matchmaker;
