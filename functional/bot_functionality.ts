import { suiteParams } from "../params_module/suite";
import { branchParams } from "../params_module/branch";
import { runCommands, forProtractor, forYandexTank, protractorParams } from "../called_params/startParams.json";
var SlackBot = require("slackbots");
var jenkinsapi = require('jenkins-api');

var IsCheckPrintBranch = true;
var IsCheckPrintAgentName = true;
var IsCheckPrintSuite = true;

export class Slack {
    private _bot : any;
    private _jenkins : any;
    private _channel: string;

    public get bot() : any {
        return this._bot;
    }

    constructor(botName:string, botToken:string, channel:string, username:string = '', token:string = '', jenkins_company:string = '') {
        this._jenkins = jenkinsapi.init('http://' + username +':' + token + '@' + jenkins_company );
        this._bot = new SlackBot({
            token: botToken,
            name: botName
        });
        this._channel = channel;
    }

    public SendMessage(message: string) {
        var params = {
            icon_emoji: ':robot_face:'
        };
        this.bot.postMessageToChannel(this._channel, message, params);

        console.log('Message was sent to '+this._channel+' channel.');
    }

    // Respons to Data
    public HandleMessage(message: string) {   
        let pieces = message.split(' ');
        for (let i: number = 0; i < 4; i++) {
            if (message.includes(runCommands[i])) {
                console.log("Проверка наличия команды запуска в сообщении от пользователя");
                if (IsCheckPrintSuite) {
                    console.log("Проверка для корректного ответа от бота");
                    this.SendMessage('Введите SUITE: ');
                    IsCheckPrintSuite = false;        
                }
            }
        }

        for (let i: number = 0; i < 32; i++) {
            if (message.includes(suiteParams[i])) {
                console.log("Проверка наличия SUITE в сообщении от пользователя");
                protractorParams[0] = pieces[1];
                if (IsCheckPrintBranch) {
                    console.log("Проверка для корректного ответа от бота");
                    this.SendMessage('Введите BRANCH: ');
                    IsCheckPrintBranch = false;
                }
            }
        }

        for (let i: number = 0; i < 2; i++) {
            if (message.includes(branchParams[i])) {
                console.log("Проверка наличия BRANCH в сообщении от пользователя");
                protractorParams[1] = pieces[1];
                if (IsCheckPrintAgentName) {
                    console.log("Проверка для корректного ответа от бота");
                    this.SendMessage("Введите AGENTNAME: ");
                    IsCheckPrintAgentName = false;
                }
            }
        }

        if (message.includes(" cloud")) {
            // TO DO >> Create starting job with tests
        }  
    }
}