const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp, accountSignIn } = require('../validators/account');
const { getMessage } = require('../validators/account');
const { generateJwt, generateRefreshJwt } = require('../helpers/jwt');

const router = express.Router();

const saltRounds = 10;

router.post('/sign-in', accountSignIn, async(req, res) => {
    const { email, password } = req.body;   //recebe o usuario
    const account = await Account.findOne({ where: { email } });    //verifica se o usuario existe

    const match = account ? bcrypt.compareSync(password, account.password) : null;  //verifica a senha e compara com a do email do banco
    if(!match) return res.jsonBadRequest(null, getMessage('account.signin.inavlid'));
    
    const token = generateJwt({ id: account.id });
    const refreshToken = generateRefreshJwt({ id: account.id, version: account.jwtVersion });

    return res.json({account, token, refreshToken}).status(200);
});

router.post('/sign-up', accountSignUp /*um middleware apenas para essa rota*/, async (req, res) => {
    const { name, email, address, naddress, neighborhood, cep, phone1, phone2, password_confirmation, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({ name, email, password: hash, password_confirmation: hash, address, naddress, neighborhood, cep, phone1, phone2 });

    const token = generateJwt({ id: newAccount.id });
    const refreshToken = generateRefreshJwt({ id: newAccount.id, version: newAccount.jwtVersion });

    return res.json({newAccount, token, refreshToken}).status(204);
});

module.exports = router;