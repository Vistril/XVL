const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help']
        });
    }

    exec(m) {
	let name = m.displayName || m.author.username;
        let embed = new RichEmbed()
            .setColor(this.client.embedColor)
            .setTitle('Command List')
            .addField('+help', 'Shows command list!')
            .addField('+ping', 'Shows numerical strength of connection to Discord')
            .addField('+vote ["question"]', 'Your beloved vote command!')
            .addField('+pick [choices | seperated | by | pipes]', 'Picks something random given your arguments! Did you know: | is called a pipe!')
	        .addField('+suggest ["suggestion"]', 'Suggest a feature! Misuse of this feature may result in being added to the bot blacklist.')
	        .addField('+avatar ["name"]', 'Fetch avatar of a user')
	        .addField('+support', 'Join the XVL Development server')
	        .addField('+invite', 'Want XVL for your own server?')
            .setTimestamp()
            .setFooter('Requested by ' + name, this.client.users.get(m.author.id).avatarURL);
        m.util.send(embed);
	let embed2 = new RichEmbed()
	   .setColor(this.client.embedColor)
	   .setTitle('For Operators')
	   .addField('+echo [message]', 'Makes Nate repeat what you say')
	   //.addField('+setActivity (+setact) [message]', 'Sets XVL\'s status to what you want')
	   .addField('+bam [something]', 'Fake-ban someone or something')
 	   //.addField('+dm [user id | message ]', 'For sending mod-mail');
	m.channel.send(embed2);
    }
}

module.exports = HelpCommand;
