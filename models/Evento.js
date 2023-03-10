const {Schema, model} = require('mongoose');

const EventoSchema = Schema({
    
    title: {
        type: String,
        required: true
    },

    notes: {
        type: String
    },

    start: {
        type: Date,
        required: true
    },

    end: {
        type: Date,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: true
    }
});

EventoSchema.method('toJSON', function(){
    const {__v, _id, ...obejtc} = this.toObject();
    obejtc.id = _id;
    return obejtc;
})

module.exports = model('Evento', EventoSchema);