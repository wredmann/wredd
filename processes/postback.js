const request = require('request');
const senderAction = require('../Templates/senderAction');
const sendMessage = require('../Templates/sendMessage');

module.exports = function processPostback(event) {

    const senderID = event.sender.id;
    const payload = event.postback.payload;
    if (payload === 'WELCOME') {
        request({ url: "https://graph.facebook.com/v2.6/" + senderID,
    qs: { access_token: EAAGksr8gsZCIBALDAYqCbEpqjfkTrJjAEMDn2nsUbPJhVRqeu4p8PtSDC9ulYLZBauCeDWyrdKBDaitULZBisA6sSf207ZARFwReXJRVShlM90lZB6Org8dq5AqsSIoZASsWieAfghBkzaMSr3D5gHIymzIbguFJrZBHigtCPQo5WjiDRmWhlhv,
    fields: "first_name"
    },
    method: "GET"
    }, function(error, response, body) {
        let greeting = '';
        if (error) {
            console.error("Error getting user name: " + error);
        } else {
            let bodyObject = JSON.parse(body);
            console.log(bodyObject);
            name = bodyObject.first_name;
            greeting = "Hello " + name + ". ";
        }
        let message = greeting + "Welcome to Wredbot. Hope you are doing good today";

        let message2 = "I am your friendly bot :-)"

        let message3 = "please type in what you want to do.";

        senderAction(senderID);
         sendMessage(senderID, {text: message}).then( () => {
             sendMessage(senderID, { text: message2 }).then( () => {
                 sendMessage(senderID, { text: message3 }).then( () =>
                 {
                     sendMessage(senderID, { text: ''});
                 })
             });
         });
    });
    }
}