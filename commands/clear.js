// TODO: if input > 100, ask user if they want to clear exactly 100 msg
//          => get reply as reaction (thumbs up / thumbs down)
module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(client, message, args, Discord) {
        let amount = args[0];
        if (!amount) return message.reply("please enter the amount of messages you want to clear");
        if (isNaN(amount)) return message.reply("please enter a real number");

        if (amount > 100) return message.reply("you cannot delete more than 100 msg at a time");
        if (amount < 1) return message.reply("delete at least one message");

        if (amount == 100) amount = 99;

        // fixing discords way of deleting files so the exact number of lines gets deleted
        amount++;

        await message.channel.messages.fetch({ limit : amount }).then(messages => {
            console.log('deleting: ' + amount + ' messages');
            message.channel.bulkDelete(messages);
        });
    }
}
