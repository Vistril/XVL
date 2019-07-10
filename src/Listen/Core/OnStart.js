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
            .setColor('#CD00CD')
            .setFooter('Bot by onePurpose#8192');
        this.client.channels.get('441346846045241358').send(embed);
    }
}

module.exports = OnStartEvent;
