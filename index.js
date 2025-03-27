import { Client } from "ntp-time"; // ES Module Syntax
// If using CommonJS, use: const { getNetworkTime } = require("ntp-time");

run()

async function run() {
    console.log('Current timestamp is', await getCurrentTimeStamp())
}

async function getCurrentTimeStamp() {
    const ntpServer = "pool.ntp.org"; // Public NTP Server
    const client = new Client(ntpServer, 123, { timeout: 5000 });

    try { 
        return (await client.syncTime()).txTimestamp - 2208988800;
    } catch (error) {
        console.warn('Timestamp is retrieved locally')
        return new Date().getTime()
    }
}