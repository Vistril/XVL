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
client.login('gay');
