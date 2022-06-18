module.exports = {
    name: 'kick',
    description: "Kick a member",
    execute(client, message, args, Discord) {
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Not authorized to kick members");
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User " + memberTarget.displayName + " has been kicked");
        } else {
            message.channel.send('unable to kick that member');
        }
    }
}
