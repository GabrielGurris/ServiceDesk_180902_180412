const express = require('express');
const { Incident, Account } = require('../models');

const router = express.Router();

router.get('/:accountId', async(req, res) => {
    const {accountId} = req.params; 
    const account = await Account.findOne({where: {id: accountId}});

    let incidents;
    if(account.manager)
        incidents = await Incident.findAll();
    else    
        incidents = await Incident.findAll({where:{accountId}});

    return res.json(incidents);
});

router.post('/', async(req, res) => {
    const { id, resumo, descricao, categoria, subcategoria, impacto, urgencia } = req.body;
    
    const incident = await Incident.create({ resumo, descricao, categoria, subcategoria, impacto, urgencia, accountId : id });

    return res.json(incident);
});

router.get('/:id', async(req, res) => {
    const accountId = req.id;
    const { id } = req.params;
    const incident = await Incident.findOne({ where: {id, accountId }});
    if(!incident) return res.json('Nao encontrado');

    return res.json(incident);

});

router.delete('/:id/:accountId', async (req, res) => {
    const { id,accountId } = req.params;
    
    const incident = await Incident.findOne({where: {id, accountId}});
    if(!incident) return res.json('Nao encontrado');
    
    await incident.destroy();
    return res.send().status(201);

});

module.exports = router;

