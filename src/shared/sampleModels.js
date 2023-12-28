function sampleText (textResponse, number){
    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "text",
        "text": {
        "body": textResponse
        }
    });
    return data;
}

function sampleImage (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "image",
        "image": {
            "link":"https://firebasestorage.googleapis.com/v0/b/storage-vito.appspot.com/o/lobito.png?alt=media&token=1bf0f0e5-c272-4bfe-b886-726ee689e13b"
        }
    });
    return data;
}

function sampleAudio (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "audio",
        "audio": {
            "link":"https://firebasestorage.googleapis.com/v0/b/storage-vito.appspot.com/o/Saludo-VITO.mp3?alt=media&token=acc3753e-bc65-4f74-82a3-a614e371e9f7"        }
    });
    return data;
}

function sampleVideo (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "video",
        "video": {
            "link": "https://firebasestorage.googleapis.com/v0/b/storage-vito.appspot.com/o/Bebe.mp4?alt=media&token=9e24312b-fcce-456a-885b-a57d3aa6a2bc"   
        }
    });
    return data;
}

function sampleDocument (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "document",
        "document": {
            "link": "https://firebasestorage.googleapis.com/v0/b/storage-vito.appspot.com/o/15.%20SAN%20CRISTO%CC%81BAL.pdf?alt=media&token=79c6bb32-cfad-4a3a-b834-50b1a5ab0be8"
        }
    });
    return data;
}

function sampleButton (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "*Selecciónes una de las opciones*"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "1",
                            "title": "SI"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "2",
                            "title": "NO"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

function SampleList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function sampleLocation (number){    
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "location",
        "location": {
        "latitude":"2.433494",
        "longitude":"-76.599827",
        "name":"Casa Vito",
        "address":"Calle 11B # 5BE - 25"
        
    }
    });
    return data;
}


module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButton,
    sampleLocation,
    SampleList   
};