require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

const options = { expiresIn: '30 minutes' }; //tempo que vai expirar esse Jwt
const refreshOptions = { expiresIn: '30 days' };

const generateJwt = (payload /*conteudo do jwt*/) => {  //gerar um token
    return jwt.sign(payload, tokenPrivateKey, options); //carga do jwt, chave, opçoes
}

const generateRefreshJwt = (payload /*conteudo do jwt*/) => {   //usada para gerar um novo token
    return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions); //carga do jwt, chave, opçoes
}

const verifyJwt = (token) => {
    return jwt.verify(token, tokenPrivateKey);  //verifica token
}

const verifyRefreshJwt = (token) => {
    return jwt.verify(token, refreshTokenPrivateKey);  //verifica token
}

module.exports = { generateJwt, generateRefreshJwt, verifyJwt, verifyRefreshJwt};