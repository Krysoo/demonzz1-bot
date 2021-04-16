const config = require("./config.json")
const tmi = require('tmi.js')

const user = {
    identity: {
        username: config.username,
        password: config.oauth
    },
    channels: [
        'demonzz1',
    ]
}

const client = new tmi.client(user);
client.connect();

let heist = config.heist

// events
client.on('message', (channel, tags, message) => {
    if (tags['display-name'] != "demonzzbot") {
        return;
    }
    else {
        if(message.includes("Type !boss to join!")) {
            client.say(channel, '!boss');
            console.log("!boss")
        }
        if(message.includes("Type !ffa to join!")) {
            client.say(channel, '!ffa')
            console.log("!ffa")
        }
        if(message.includes("-Everyone can Join!- In order to join type !heist (amount).")) {
            client.say(channel, `!heist ${heist}`)
            console.log(`!heist ${heist}`)
        }
    }
})

client.on('message', (channel, tags, message) => {
    if (tags['display-name'] != "demonzzbot") return
    else {
        if(message.includes(`${user.identity.username} (`)) {
            console.log("Wygrano!")
        }
    } 
})

client.on('connected', () => {
    console.log(`Połączono z ${user.channels}`)
})
