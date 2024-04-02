import os
import discord
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env

TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event  # Decorator to mark a function as an event listener
async def on_ready():
    print(f'{client.user} has connected to Discord!')

@client.event  # Handles message events
async def on_message(message):
    if message.author == client.user:  # Don't respond to itself
        return

    if message.content.startswith('!hello'):  # Check for the command
        await message.channel.send('Hi there!')

client.run(TOKEN)  # Starts the bot
