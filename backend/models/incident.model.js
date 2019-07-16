const mongoose = require("mongoose");
const schema = mongoose.Schema;
const incidentSchema = new schema({
        number:{
            type:String,
        },
        description:{
            type:String,
            required:true,
        },
        customer_name:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        narrative:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

const Incident = mongoose.model('Incident',incidentSchema);
module.exports = Incident;