const { Listener } = require('discord-akairo');
const fs = require('fs');
class AntiNewListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            eventName: 'guildMemberAdd',
        });
    }

    exec(mem) {
        if (mem.guild.id != '441340010843602944') return;
        let antiTime = parseInt(fs.readFileSync('./src/Listen/Util/time.txt')) * 86400000;
        let memberTime = Date.now() - mem.user.createdAt;
        if (antiTime * 1000 > memberTime) {
            this.client.channels.get('441346846045241358').send('Account kicked for being too new.');
            mem.kick()
        } else {
            mem.send('You need to verify your membership before you can enter this server.')
            fs.writeFileSync('./src/Listen/Util/time.txt', '10');
        }
    }
}

module.exports = AntiNewListener;