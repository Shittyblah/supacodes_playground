## Discord Bot Documentation

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Commands](#commands)
- [Advanced Usage](#advanced-usage)
  - [Customizing the Bot](#customizing-the-bot)
- [Reference](#reference)
  - [Modules](#modules)
  - [Functions](#functions)

### Introduction

This document provides a comprehensive guide to using the Discord bot. The bot is designed to interact with users on the Discord platform, responding to commands and providing information.

### Getting Started

#### Prerequisites

To use the bot, you will need the following:

- A Discord account
- A Discord server to invite the bot to
- Python 3.6 or later
- Pipenv

#### Installation

1. Clone the bot's repository to your local machine:
```
git clone https://github.com/your-username/discord-bot.git
```
2. Change into the bot's directory:
```
cd discord-bot
```
3. Install the required Python packages:
```
pipenv install
```

### Basic Usage

#### Commands

The bot currently supports the following commands:

| Command | Description |
|---|---|
| `!hello` | Responds with "Hi there!" |
| `!help` | Displays a list of all available commands |
| `!info` | Displays information about the bot |

To use a command, simply type it into the chat window and press Enter.

### Advanced Usage

#### Customizing the Bot

You can customize the bot to suit your needs by editing the following files:

- `config.py`: Contains configuration settings for the bot, such as the bot's token and prefix.
- `commands.py`: Contains the code for the bot's commands.

### Reference

#### Modules

The bot uses the following Python modules:

- `discord`: Provides the core functionality for interacting with the Discord API.
- `dotenv`: Loads environment variables from a `.env` file.
- `pipenv`: Manages Python packages.

#### Functions

The bot defines the following functions:

- `on_ready()`: Called when the bot is ready to receive events.
- `on_message(message)`: Called when a message is received in a channel that the bot is in.

### Example Usage

```python
import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')

@bot.command()
async def hello(ctx):
    await ctx.send('Hi there!')

bot.run('your_bot_token')
```