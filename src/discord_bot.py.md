## Discord Bot Documentation :gear:

### Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Commands](#commands)
- [Event Listeners](#event-listeners)
- [Error Handling](#error-handling)
- [Best Practices](#best-practices)
- [Example Usage](#example-usage)

### Introduction

This documentation provides an overview of the Discord bot's functionality, setup, and usage. The bot is designed to interact with Discord users through commands and handle various events within the Discord server. It utilizes the Discord.py library for Python to establish a connection with the Discord API.

### Getting Started

**Prerequisites:**
1. Discord account
2. Discord server
3. Python 3.6 or later
4. pip
5. .env file

**Setup:**
1. Install Python and Discord.py using pip:
   - `pip install discord`

2. Create a `.env` file in the same directory as your Python script and add the following line (replace `YOUR_TOKEN` with your Discord bot's token):
   - `DISCORD_TOKEN=YOUR_TOKEN`

3. Obtain your Discord bot's token by following these steps:
   - Go to the Discord developer portal https://discord.com/developers/applications/
   - Create a new application or select an existing one
   - Navigate to the "Bot" tab
   - Click the "Add Bot" button and create a new bot
   - Copy the token generated for your bot and store it securely

### Commands

The Discord bot supports the following commands:

| Command | Description |
|---|---|
| `!hello` | Responds with "Hi there!" |

### Event Listeners

The Discord bot listens for the following events:

| Event | Description |
|---|---|
| `on_ready()` | Triggered when the bot connects to the Discord server |
| `on_message()` | Triggered when a message is sent in a channel where the bot is present |

### Error Handling

To ensure robust operation, the bot includes error handling capabilities. Unhandled exceptions are caught and logged, and the bot automatically attempts to reconnect to the Discord server if the connection is lost.

### Best Practices

When using the Discord bot, it is recommended to follow these best practices:

- Use commands wisely and avoid spamming the chat.
- Respect other users and refrain from using offensive or inappropriate language.
- Report any bugs or issues to the designated support channel or contact the bot's developers.

### Example Usage

```python
import discord
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_message(message):
    if message.content.startswith('!hello'):
        await message.channel.send('Hi there!')

client.run(TOKEN)
```

1. Import the necessary modules.
2. Load environment variables from a `.env` file.
3. Retrieve the Discord bot's token from the environment variables.
4. Create a Discord client instance.
5. Define an event listener for message events.
6. Check if the message content starts with "!hello" and respond with "Hi there!" if it does.
7. Start the Discord bot by running the `client.run()` method.