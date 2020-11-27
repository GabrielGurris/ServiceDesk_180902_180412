const Joi = require('@hapi/joi');
const { getValidatorError } = require('../helpers/validator');

const rules = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{3,30}$')).required(), //validaçao //DE A a Z maiusculo ou minusculo, pode ser só letras ou numero e tamanho de 3 a 30
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),//confirmando se a senha é igual
    address: Joi.string().required(),
    naddress: Joi.string().required(),
    neighborhood: Joi.string().required(),
    cep: Joi.string().required(),
    phone1: Joi.string().required(),
    phone2: Joi.string().required()
}

const options = { abortEarly: false };

const accountSignIn = (req, res, next) => {
    const { email, password } = req.body;

    const schema = Joi.object({
        email: rules.email,
        password: rules.password
    });

    const { error } = schema.validate({ email, password }, options); //validando a senha, se encontrar um dado incorreto ele ja para e retorna erro

    if (error) {
        const messages = getValidatorError(error, 'account.signin');
        return res.jsonBadRequest(null, null, { error: messages }) //dados, mensagem, metadados 
    }

    next();
}

const accountSignUp = (req, res, next) => {
    const { name, email, password, password_confirmation, address, naddress, neighborhood, cep, phone1, phone2 } = req.body;

    const schema = Joi.object({
        name: rules.name,
        email: rules.email,
        password: rules.password,
        password_confirmation: rules.password_confirmation,
        address:rules.address,
        naddress:rules.naddress, 
        neighborhood:rules.neighborhood,
        cep:rules.cep,
        phone1:rules.phone1,
        phone2:rules.phone2 
    });

    const { error } = schema.validate({ name, email, password, password_confirmation, address, naddress, neighborhood, cep, phone1, phone2 }, options); //validando a senha, se encontrar um dado incorreto ele ja para e retorna erro
   
    if (error) {
        const messages = getValidatorError(error, 'account.signup');
        return res.jsonBadRequest(null, null, { error: messages }) //dados, mensagem, metadados 
    }

    next();
}

module.exports = { accountSignUp, accountSignIn };