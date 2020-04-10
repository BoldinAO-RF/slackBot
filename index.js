const SlackBot = require('slackbots');

botName = 'test'; // канал с которым взаимодействует бот
botToken = 'xoxb-1052602287190-1052775649142-SiLixbXQkFy9mOUS36snjGfS'; // bot_token
channel = 'q' // channel_name without #

const bot = new SlackBot({
    token: `${botToken}`,
    name: `${botName}`
});

// Start handler
bot.on('start', () => {
    // Something do when start
});

function postMessage(message) {
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel(
        `${channel}`,
        `${message}`,
        params
    );
}

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

// Respons to Data
function handleMessage(message) {
    console.log(message);
    if (message.includes(' test')) {
        someFunction();
    } else if (message.includes('restart')) {
        someFunctionSecond();
    }
}

function someFunction() {
    postMessage('test2');
}

function someFunctionSecond() {
    postMessage('test3');
}