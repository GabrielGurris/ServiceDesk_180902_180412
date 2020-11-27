const express = require('express');
const { Demand } = require('../models');

const router = express.Router();

router.get('/:accountId', async(req, res) => {
    const {accountId} = req.params; 

    const demands = await Demand.findAll({where:{accountId}});

    return res.json(demands);
});

router.post('/', async(req, res) => {
    const { id, resumo, descricao, categoria, subcategoria, impacto, urgencia } = req.body;

    const demand = await Demand.create({ resumo, descricao, categoria, subcategoria, impacto, urgencia, accountId : id });

    return res.json(demand);
});

router.get('/:id', async(req, res) => {
    const accountId = req.id;
    const { id } = req.params;
    const demand = await Demand.findOne({ where: {id, accountId }});
    if(!demand) return res.json('Nao encontrado');

    return res.json(demand);

});

router.delete('/:id/:accountId', async (req, res) => {
    const { id, accountId } = req.params;

    const demand = await Demand.findOne({where: {id, accountId}});
    if(!demand) return res.json('Nao encontrado');
    
    await demand.destroy();
    return res.send().status(201);

})

module.exports = router;

