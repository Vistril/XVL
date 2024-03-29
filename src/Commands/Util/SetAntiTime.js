const {
    Command
} = require('discord-akairo');
const fs = require('fs');
class SetAntiTime extends Command {
    constructor() {
        super('antinew', {
            aliases: ['antinew', 'anti'],
            args: [{
                id: 'timeInDays',
                type: 'string',
                default: '10'
            }]
        });
    }

    async exec(m, args) {
        if (m.guild.id != '441340010843602944') return;
        if (m.member.roles.find(r => ['Moderators', 'Mods', 'Server Admin'].includes(r.name)) !== null || m.author.id == this.client.ownerID) {
            m.delete();
            if (!args.timeInDays) m.reply('Please input a number (time in days) to set as the AntiNew account check.');
            if (args.timeInDays == 'off') { 
                m.reply('**WARNING!** This will set the AntiNew account protection off. It will automatically reset once a member joins.')
                fs.writeFileSync('./src/Listen/Util/time.txt', '0');
                setTimeout(() => {
                    fs.writeFileSync('./src/Listen/Util/time.txt', '10');
                }, 300000);
            } else {
                fs.writeFileSync('./src/Listen/Util/time.txt', args.timeInDays);
                m.channel.send(':clock::white_check_mark: | Time (in days) set to: **' + args.timeInDays + '**');
            }
        } else {
            m.delete();
            m.reply(':no_entry: **No permissions**')
        }
    }
}

module.exports = SetAntiTime;