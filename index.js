const express = require("express");
const apiRoute = require("./src/routes/routes");

const app = express();

// app.get('/',(req, res)=>{
//     res.send("Hola mundo mundo")
// })

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", apiRoute);

app.listen(PORT, () => {console.log("el puerto es: " + PORT)});