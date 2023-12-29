const whatsappModel = require ("../shared/whatsappModels");
const whatsappService = require ("../services/whatsappService"); // API

function process (textUser, number){
    textUser = textUser.toLowerCase();//todo lo que ingresa sera minuscula
    var models=[];

    if(textUser.includes("hola")){
        //saludar
        var model = whatsappModel.messageText("Hola, soy VITO un gusto saludarte", number);
        models.push(model);
        var modelList = whatsappModel.messageList(number);
        models.push(modelList);
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
    else if (textUser.includes("comprar")){
        // comprar
        var model = whatsappModel.messageComprar( number);
        models.push(model);
    }
    else if (textUser.includes("vender")){
        // vender
        var model = whatsappModel.messageText("Registrate en el siguiente formulario: https://www.mercadolibre.com.co/hub/registration?from_landing=true&contextual=normal&redirect_url=https%3A%2F%2Fwww.mercadolibre.com.co%2F&entity=pf", number);
        models.push(model);
    }
    else if (textUser.includes("agencia")){
        // Agencia
        var model = whatsappModel.messageLocation(number);
        models.push(model);
    }
    else if (textUser.includes("contacto")){
        // Contacto
        var model = whatsappModel.messageText("*Centro de contacto:* \n3356985654", number);
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