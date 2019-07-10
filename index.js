const { AkairoClient } = require('discord-akairo');
const Discord = require('discord.js');


const client = new AkairoClient({
    ownerID: '362315641161515008',
    handleEdits: true,
    commandUtil: true,
    commandUtilLifetime: 600000,
    prefix: '+',
    commandDirectory: './src/Commands',
    listenerDirectory: './src/Listen'
}, {
    disableEveryone: true
});
/*dBots.nate.on('message', (m) => {
	console.log(`${m.author}: ${m.content}`);
});
dBots.nate.channels.get('481626628750049300').fetchMessages().then(m => {
        let msgs = m.array();
        for (let i in msgs) {
                console.log(`${msgs[i]}\n`);
        }
});*/
client.login('gay');
