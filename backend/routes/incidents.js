const router = require('express').Router();
let Incident = require('../models/incident.model');

router.route('/').get((req,res)=>{
    Incident.find()
        .then(incidents=>res.json(incidents))
        .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/add').post((req,res)=>{
    const number = req.body.number;
    const description = req.body.description;
    const customer_name = req.body.customer_name;
    const priority = req.body.priority;
    const narrative = req.body.narrative;

    const newIncident = new Incident({number,description,customer_name,priority,narrative});
    newIncident.save()
        .then(()=>res.json('Incident added!'))
        .catch(err=>res.status(400).json("Error:"+err));
});

module.exports = router;