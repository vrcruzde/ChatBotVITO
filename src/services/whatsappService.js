const https = require("https");
function SendMessageWhatsApp(data){
       
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/202809269571745/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAATcwdYvm7oBOZCJ9yK9RFbKiwCLVYZCM6RHkqMbZBzHqIzWELbTG8MFTGIu0xreZBrcqbZCPIUivmsfHloDn7ipJpVAjV42fZCsoQA9NcE32wZCaYXtcG4fwFw1EayEGl8zHTSy8bzakZCgRCOaJjX4Pz790gia07dSGfGXsdU4cb87DT1ZBWvr3EhImUsld0inb"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};