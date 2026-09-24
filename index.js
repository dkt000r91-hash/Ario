const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// آيدي القناة المستخرج من const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// آيدي القناة المستخرج من الرابط الخاص بك
const CHANNEL_ID = '1484827428483235860'; 

client.on('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح باسم ${client.user.tag}!`);

    // إرسال رسالة تلقائية كل ساعة (3600000 ملي ثانية)
    setInterval(async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) {
                channel.send(':Ario:');
            }
        } catch (error) {
            console.error('خطأ أثناء إرسال الرسالة التلقائية:', error);
        }
    }, 3600000);
});

// الرد فوراً عند منشن البوت
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // يتحقق إذا تم منشن البوت في الرسالة
    if (message.mentions.has(client.user)) {
        message.channel.send(':Ario:');
    }
});

client.login('MTU1MjY3MTE4MzM3NDEyMzA2OQ.GGBXfB.lj7WmhjFHNq7c5blT17ESFlRzpZWPAl36yQAYc');

