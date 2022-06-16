const Discord = require("discord.js");
require('dotenv').config();

// sets the bots intents
const client = new Discord.Client({ intents: [
  "DIRECT_MESSAGES",
  "DIRECT_MESSAGE_REACTIONS",
  "DIRECT_MESSAGE_TYPING",
  "GUILDS",
  "GUILD_BANS",
  "GUILD_EMOJIS_AND_STICKERS",
  "GUILD_INTEGRATIONS",
  "GUILD_INVITES",
  "GUILD_MEMBERS",
  "GUILD_MESSAGES",
  "GUILD_MESSAGE_REACTIONS",
  "GUILD_MESSAGE_TYPING",
  "GUILD_PRESENCES",
  "GUILD_SCHEDULED_EVENTS",
  "GUILD_VOICE_STATES",
  "GUILD_WEBHOOKS"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

// login token for the bot
client.login(process.env.DISCORD_TOKEN);
