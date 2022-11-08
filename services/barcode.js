// jwt import
const jwt = require("jsonwebtoken")

// encrypt with jwt
const encrypt = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })
  return token
}

// decrypt with jwt
const decrypt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

const decryptTicket = (encryptTicket, signatureKey) => {
  const ticketData = jwt.verify(token, signatureKey)
  return `Your barcode is ${barcode}`
}

export { barcodeParser }
