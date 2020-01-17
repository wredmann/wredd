const request = require('request');
module.exports = function senderAction(recipientId) {

request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: { accesss_token: "EAAGksr8gsZCIBAP7IAIOizwSzjpfYwKnlJfJ0UHjZCZA3U53dxHmprXhdqJ8dCqCy63CORjt4s6TaXo5MZAXOY4YjEMjrBoVUYZAtfQE5Yz36QZAfVDfFlGLXUlet8Go9C3P0xPV41MApigA19EdBxufgkXIONxvAO4Uvjd8zeBeynoxqS23SC" },
    method: "POST",
    json: {
        receipient: {id: recipientId},
        "sender_action":"typing_on"
    }
}, function(error, response, body) {
    if (errer) {
        console.log("Error sending message: " + response.error);
    }
});
}