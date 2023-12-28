const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappService = require("../services/whatsappService");
const samples = require ("../shared/sampleModels")


const VerifyToken = (req, res) => {
    try{
        var accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    }catch(e){
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        
        if(typeof messageObject != "undefined"){
            var messages = messageObject[0];
           var number = messages["from"];
            var text = GetTextUser(messages);
                 
            if(text == "text"){
                var data = samples.sampleText("Hola Vito", number);
                whatsappService.SendMessageWhatsApp(data)
            }else if(text == "image"){
                var data = samples.sampleImage(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "video"){
                var data = samples.sampleVideo(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "document"){
                var data = samples.sampleDocument(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "audio"){
                var data = samples.sampleAudio(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "button"){
                var data = samples.sampleButton(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "location"){
                var data = samples.sampleLocation(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else if(text == "list"){
                var data = samples.SampleList(number);
                whatsappService.SendMessageWhatsApp(data)
            }
            else{
                var data = samples.sampleText("No entiendo Att: VITO", number);
                whatsappService.SendMessageWhatsApp(data)
            }

       }        

        res.send("EVENT_RECEIVED");
    }catch(e){
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

function GetTextUser(messages){
    var text = "";
    var typeMessge = messages["type"];
    if(typeMessge == "text"){
        text = (messages["text"])["body"];
    }
    else if(typeMessge == "interactive"){

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
