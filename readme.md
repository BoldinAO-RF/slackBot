# Создание бота в слак

1. Открыть https://api.slack.com/apps?new_classic_app=1 для создания классического бота

2. В поле App Name указываем желаемое имя бота

3. В поле Development Slack Workspace выбираем пространство куда будет устанавливаться бот

4. Нажимаем Create App

5. Переходим на вкладку Incoming Webhooks

6. Включаем Activate Incoming Webhooks

7. Переходим на вкладку App Home

8. Нажимаем кнопку Add Legacy Bot User

9. В поле Display Name заполняем желаемое имя бота для отображения в Slack

10. В поле Username указываем имя бота, которое в дальнейшем будет использоваться для взаимодействия

11. Нажимаем Add

12. Переходим на вкладку OAuth & Permissions

13. Нажимаем кнопку Install App to Workspace

14. В поле test requires a channel to post to as an app выбираем канал куда нужно поставить бота

15. Нажать кнопку Allow


# Настройка перед запуском

В файле index.ts указать:

botToken: можно взять на странице OAuth & Permissions настройки бота

botName: имя бота которое указывали на 10 шаге при настройке бота

channel: название канала для общения с ботом

также, необходимо указать следующие поля для запуска job в jenkins:

username, token, jenkins_company
	
	для получения итоговой строки : var jenkins = jenkinsapi.init('https://username:token@jenkins.company.com');

запустить команду tsc(дождаться компиляции)
	

# Установка пакетов

1. npm i


# Запуск скрипта

npm run start

# Чистка файлов после запуска

npm run clear

# Запуск из докера

docker run --rm имя_сборки BotName BotToken ChannelForBot