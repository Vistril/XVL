const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');

class EvalCommand extends Command {
    constructor() {
        super('eval', {
            aliases: ['eval', 'js'],
            split: 'none',
            args: [
                {
                    id: 'code',
                    type: 'string',
                    default: '"Hello World!"'
                }
            ]
        });
    }
    
    async exec(m, args) {
        if (m.author.id == this.client.ownerID) {
            let evaled = '';
            try { 
                evaled = eval(args.code);
            } catch (e) {
                evaled = e;
            }
            let embed = new RichEmbed()
                .setTitle('`' + args.code + '`')
                .addField('Output', '```js\n' + evaled + '\n```')
                .setColor(this.client.embedColor)
                .setTimestamp();
            m.util.send(embed);
        }
    }
}

module.exports = EvalCommand;
