const VerifyToken = (req, res) => {
   res.send("hola VeryfyToken")
}

const ReceivedMessage = (req, res) => {
    res.send("hola Received")
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
