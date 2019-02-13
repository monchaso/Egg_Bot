module.exports = {
	name: 'suggest',
	description: 'Suggest something **JOKE SUGGESTIONS ARE NOT ALLOWED**',
	cooldown: 30,
	guildOnly: true,
	args: true,
	execute(message,args) {
		if (!message.member.roles.has("544308625741447168")) {
			return message.reply("you're not allowed to use that command yet!")
		}
		const data = [];
		let suggestion = args.join(' ');
		data.push("**Suggestion by:** "+message.author)
		data.push(suggestion)
		message.guild.channels.get("480206111790596106").send(data,{split : true})
		.then(function(postedSuggestion){
			postedSuggestion.react('👍').then(() => postedSuggestion.react('👎'));
			message.reply("Suggestion posted :white_check_mark:");
			message.delete();
		}).catch(function(){
			message.channel.reply("there was an error trying to post your suggestion!")
		})
	},
};
