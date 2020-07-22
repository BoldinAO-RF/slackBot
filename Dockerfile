FROM ubuntu:latest

WORKDIR /SlackBot

RUN apt update && \
    apt install nodejs -y && \
    apt install npm -y && \
    npm install -g typescript

COPY . /SlackBot/

RUN chmod +x ./settings/start.sh && \
    cd ..

ENTRYPOINT ["/SlackBot/settings/start.sh"]