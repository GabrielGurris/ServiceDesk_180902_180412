const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validators/account');
const router = express.Router();

router.get('/', async (req, res) => {
    const accounts = await Account.findAll(); 

    return res.json(accounts);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const account = await Account.findOne({ where: { id } });

    return res.jsonOK(account);
});

router.put('/:id', accountSignUp, async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const fields = ['address', 'naddress', 'neighborhood', 'cep', 'phone1', 'phone2', 'password', 'password_confirmation'];
    
    const account = await Account.findOne({ where: { id } });
    if(!account) return res.json('Nao existente');

    fields.map(fieldName =>{
        const newValue = body[fieldName];
        if(!newValue) account[fieldName] = newValue;
    });

    const saltRounds = 10;
    const hash = bcrypt.hashSync(account.password, saltRounds);

    account.password_confirmation = hash;
    account.password = hash;
    
    await account.save();

    return res.json(account);
});

module.exports = router;