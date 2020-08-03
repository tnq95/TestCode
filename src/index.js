const mqtt = require('mqtt');
const options = {
    port : 1883,
    host : 'tcp://test.mosquitto.org',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2,8),
    keepalive: 60,
    reconnectPeriod: 1000,
    encoding: 'utf8'
}

let client = mqtt.connect(options.host,options);

client.on('connect', () => {
    console.log('Client_1 connected');
    client.subscribe('/Client_1/sub');
})

client.on('message',(topic,message) => {

    console.log(`Topic ${topic} said: ` +  message.toString());
    // client.publish('/Client_1/sub1','Hello from client 1');
    // client.end();
})
