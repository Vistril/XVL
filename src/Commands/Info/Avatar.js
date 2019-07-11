const { RichEmbed } = require('discord.js');
const { Command } = require('discord-akairo');

class GETPNGCommand extends Command {
    constructor() {
        super('avatar', {
            aliases: ['avatar', 'get_png'],
            args: [
                {
                    id: 'user',
                    type: 'string'
                }
            ]
        });
    }

    exec(m, args) {
        let selected = m.guild.members.get(this.client.users.find(x => x.username.toLowerCase().includes(args.user.toLowerCase())).id);
        if (!selected) {
          const embed = new RichEmbed()
                .setTitle('Profile picture of ' + m.author.tag)
                .setColor(this.client.embedColor)
                .setImage(m.author.avatarURL);
          m.util.send(embed);
	} else {
          const embed = new RichEmbed()
                .setTitle('Profile picture of ' + selected.user.tag)
                .setColor(this.client.embedColor)
                .setImage(selected.user.avatarURL);
	        m.util.send(embed);
       }
    }
}
module.exports = GETPNGCommand;
