"use strict";
import { Slack } from "../functional/bot_functionality";

var botName = process.argv[2]; // bot_name
var botToken = process.argv[3]; // bot_token
var channel = process.argv[4]; // channel_name without #

var slack = new Slack(
    botName,
    botToken,
    channel
);

slack.bot.on('start', function () {
    console.log('Bot is running.');

    slack.SendMessage('Бот запущен.');
});

// Error Handler
slack.bot.on('error', function (err: any) { return console.log(err); });

// Message Handler
slack.bot.on('message', function (data: { type: string; text: any; }) {
    if (data.type !== 'message') {
        return;
    }
    slack.HandleMessage(data.text);
});

