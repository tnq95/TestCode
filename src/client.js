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
    console.log('Client_2 connected');
    client.subscribe('/Client_1/sub1');
})

client.on('message',(topic,message) => {
    console.log(topic);
    console.log(message.toString());
    // client.publish('/Client_1/sub','Hello from client 2');
    // client.end();
})
