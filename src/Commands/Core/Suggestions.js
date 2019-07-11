const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
class SuggestCommand extends Command {
    constructor() {
        super('suggest', {
            aliases: ['suggest'],
            split: 'none',
            args: [
                {
                    id: 'suggestion',
                    type: 'string'
                }
            ]
        });
    }

    exec(m, args) {
        let suggestionOwner = m.author.tag;
        let id = 0;
        if (!args.suggestion) {
            m.reply('Please input your suggestion!');
        } else {
            let embed = new RichEmbed()
                .setTitle('Suggestion Submitted')
                .setColor(this.client.embedColor)
                .addField('"' + args.suggestion + '"', 'Thank you for your feedback.')
                .setFooter('Requested by ' + m.author.username, this.client.users.get(m.author.id).avatarURL);
            m.channel.send(embed);
            this.client.users.get(this.client.ownerID).send(args.suggestion + ', from ' + suggestionOwner);
        }
    }
}

module.exports = SuggestCommand;
