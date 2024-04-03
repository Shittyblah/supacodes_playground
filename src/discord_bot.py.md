## Discord Bot Documentation

### Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [Events](#events)
- [Commands](#commands)

### Introduction

This document provides a comprehensive guide to the Discord bot. The bot is designed to provide a simple and interactive experience for users within a Discord server.

### Setup

#### Environment Variables

Before using the bot, you will need to set up the following environment variables in a `.env` file:

| Variable | Description |
|---|---|
| DISCORD_TOKEN | The Discord bot token |

### Usage

To use the bot, you will need to invite it to your Discord server. Once the bot is added to the server, you can interact with it by sending messages in the chat.

### Events

The bot listens for specific events that occur on the Discord server. When an event is triggered, the bot will execute the corresponding function. The following events are currently supported:

| Event | Description |
|---|---|
| `on_ready` | Triggered when the bot is ready for use |
| `on_message` | Triggered when a message is sent in the chat |

### Commands

The bot supports the following commands:

| Command | Description |
|---|---|
| `!hello` | Sends a greeting message |

#### Example Usage

To use the `!hello` command, simply send the following message in the chat:

```
!hello
```

The bot will respond with the following message:

```
Hi there!
```