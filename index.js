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
pasta = `<@155149108183695360> Wot the fok did ye just say 2 me m8? i dropped out of newcastle primary skool im the sickest bloke ull ever meet & ive nicked ova 300 chocolate globbernaughts frum tha corner shop. im trained in street fitin' & im the strongest foker in tha entire newcastle gym. yer nothin to me but a cheeky lil bellend w/ a fit mum & fakebling. ill waste u and smash a fokin bottle oer yer head bruv, i swer 2 christ. ya think u can fokin run ya gabber at me whilst sittin on yer arse behind a lil screen? think again wanka. im callin me homeboys rite now preparin for a proper scrap. A roomble thatll make ur nan sore jus hearin about it. yer a waste bruv. me crew be all over tha place & ill beat ya to a proper fokin pulp with me fists wanka. if i aint satisfied w/ that ill borrow me m8s cricket paddle & see if that gets u the fok out o' newcastle ya daft kunt. if ye had seen this bloody fokin mess commin ye might a' kept ya gabber from runnin. but it seems yea stupid lil twat, innit? ima **e fury & ull drown in it m8. ur ina proper mess knob.`
client.login('NDU2MzA5MjEwOTEzODMyOTY0.XL1B4Q.HMwOMAXMc7o6gDlyGTFOJgFEcEw');
