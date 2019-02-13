module.exports = {
    name: 'info',
	description: 'Display your very own Discord information',
    aliases: ["me","myself"],
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send("Your username: ``"+message.author.username+"``\nYour ID: ``"+message.author.id+"``\nYour avatar: "+message.author.displayAvatarURL+"");
        }
		const avatarList = message.mentions.users.map(user => {
            return user.username+"'s username: ``"+user.username+"``\n"+user.username+"'s ID: ``"+user.id+"``\n"+user.username+"'s avatar: "+user.displayAvatarURL+""
		});

		message.channel.send(avatarList);
    }, 
};