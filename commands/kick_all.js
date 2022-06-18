module.exports = {
    name: 'kick_all',
    description: 'kick all members with certain args',
    execute(client, message, args, Discord) {
        if (!args[0]) return message.reply("You need to input something to kick by");
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Not authorized to kick members");
        const list = client.guilds.cache.get('986219905219186758');
        list.members.cache.forEach(member => {
            if (member.displayName.toString().includes(args)){
                if (!member) return message.reply("Not a kickable member");
                member.kick();
                message.channel.send(`${member} has been kicked`);
                console.log(member.displayName + " has been kicked");
            }
        });
    }
}
