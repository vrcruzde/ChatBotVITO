const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

// app.get('/',(req, res)=>{
//     res.send("Hola mundo mundo")
// })

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {console.log("el puerto es: " + PORT)});