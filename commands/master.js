module.exports = {
  name: 'mention',
  description: 'Responds when "Aj," "aj," or "AJ Chicano" is mentioned',
  nashPrefix: false,
  execute(api, event, args) {
    const message = event.body.toLowerCase();
    if (message.includes('Aj') || message.includes('aj') || message.includes('AJ Chicano')) {
      api.sendMessage("Don't call my master, dude", "isa pang tawag sa master lalaplapin kita", "baby, my master is busy", "anong kailangan mo sakanya?", "Kanina kapa aj ng aj ah crush muba sya?",
      event.threadID, event.messageID);
    }
  },
};
