const request = require('request');
module.exports = function sendMessage(recipientId, message) {

return new Promise(function(resolve, reject) {
    request({
        url: "https://graph.facebook.com/v2.6/me/messages",
        qs: { access_token: "EAAGksr8gsZCIBALDAYqCbEpqjfkTrJjAEMDn2nsUbPJhVRqeu4p8PtSDC9ulYLZBauCeDWyrdKBDaitULZBisA6sSf207ZARFwReXJRVShlM90lZB6Org8dq5AqsSIoZASsWieAfghBkzaMSr3D5gHIymzIbguFJrZBHigtCPQo5WjiDRmWhlhv" },
        method: "POST",
        json: {
                recipient: {id: recipientId},
                message: message,
        }
    }, function(error, response, body) {
        if (error) {
            console.log("Error sending message: " + response.error);
        reject(response.error);
        } else {
            resolve(body);
        }
    });
})
}