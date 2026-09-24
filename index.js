const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`البوت شغال وجاهز باسم: ${client.user.tag}`);

    // تحديد الوقت: كل ساعة (60 دقيقة × 60 ثانية × 1000 مللي ثانية)
    const intervalTime = 60 * 60 * 1000; 

    setInterval(() => {
        // آي دي الشات حقك
        const channelId = '1484827428483235860';
        
        const channel = client.channels.cache.get(channelId);
        if (!channel) return;

        // إرسال الكلمة كل ساعة
        channel.send(':Ario:');
        
    }, intervalTime);
});

client.login(process.env.DISCORD_TOKEN);
