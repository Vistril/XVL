const { Listener } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
class OnStartEvent extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready',
        });
    }

    exec() {
        let updateText = 'Nothing';
        const embed = new RichEmbed()
            .setTitle('Bot has restarted')
            .addField('Updates', updateText)
            .setColor(this.client.embedColor)
            .setFooter('Bot by onePurpose#8192');
        this.client.channels.get('587124761881215006').send(embed);
    }
}

module.exports = OnStartEvent;
