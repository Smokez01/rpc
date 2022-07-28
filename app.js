const clientId = '1002161790312009818';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `You can just tell me you can't.`,
        state: `Playing with Marin Kitagawa`,
        startTimestamp: Date.now(),
        largeImageKey: `marin-kitagawa`,
        largeImageText: `Marin Kitagawa <3`,
        smallImageKey: `marin-kitagawa`,
        smallImageText: `Small Icon.`,
        instance: false,
        buttons: [
            {
                label: `Beginn here!`,
                url: `https://www.crunchyroll.com/de/my-dress-up-darling/episode-1-someone-who-lives-in-the-exact-opposite-world-as-me-823787`
            },
            {
                label: `End it here!`,
                url: `https://www.crunchyroll.com/de/my-dress-up-darling/episode-12-my-dress-up-darling-840763`
            }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));