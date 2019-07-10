const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');

class UserInfoCommand extends Command {
  constructor() {
    super('userinfo', {
      aliases: ['userinfo', 'ui'],
      args: [
        {
          id: 'user',
          type: 'string'
        }
      ]
    });
  }

  async exec(m, args) {
    let selected = m.guild.members.get(this.client.users.find(x => x.username.toLowerCase().includes(args.user.toLowerCase())).id);

    if (!selected) {
      let embed = new RichEmbed()
        .setTitle(m.author.tag)
        .setTimestamp()
        .setThumbnail(m.author.avatarURL)
        .setField('Is Bot', m.author.bot ? "Yes" : "No", true)
        .setField('Account createdAt', m.author.createdAt, true)
        .setField('Guild joinedAt', m.guild.members.get(m.author.id).joinedAt, true)
        .setField('User ID', m.author.id, true)
        .setField('Guild Roles', m.guild.members.get(m.author.id).roles.map(x => x.name).join(','), true)
        .setColor("#CD00CD")
      m.channel.send(embed);
    } else {
      let isBot = selected.user.bot ? "Yes" : "No";
      let embed = new RichEmbed()
        .setTitle(selected.user.tag)
        .setTimestamp()
        .setThumbnail(selected.user.avatarURL)
        .setField('Is Bot', isBot, true)
        .setField('Account createdAt', selected.user.createdAt, true)
        .setField('Guild joinedAt', m.guild.members.get(selected.user.id).joinedAt, true)
        .setField('User ID', selected.user.id, true)
        .setField('Guild Roles', m.guild.members.get(selected.user.id).roles.map(x => x.name).join(', '), true)
        .setColor("#CD00CD");
      m.channel.send(embed);
    }
  }
}

module.exports = UserInfoCommand;
