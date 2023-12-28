const whatsappModel = require ("../shared/whatsappModels");
const whatsappService = require ("../services/whatsappService"); // API

function process (textUser, number){
    textUser = textUser.toLowerCase();//todo lo que ingresa sera minuscula
    var models=[];

    if(textUser.includes("hola")){
        //saludar
        var model = whatsappModel.messageText("Hola, soy VITO un gusto saludarte", number);
        models.push(model);
    }
    else if (textUser.includes("gracias")){
        // agradecimiento
        var model = whatsappModel.messageText("Gracias a ti por escribirme", number);
        models.push(model);
    }
    else if (textUser.includes("adios")){
        // despedida
        var model = whatsappModel.messageText("Que estés muy bien", number);
        models.push(model);
    }
    else{
        var model = whatsappModel.messageText("No comprendo lo que dices", number);
        models.push(model);
    }

    models.forEach(model =>{
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports={
    process
};