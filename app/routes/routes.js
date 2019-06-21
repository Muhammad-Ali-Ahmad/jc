const express = require('express');
const router = express.Router();
const Message = require('../schemas/jcSchemas');

class jcDTO {
    constructor(jc) {
        this.id = jc._id;
        this.message = jc.message;
    }
}

router.get('/getMessage', async (req, res) => {
    try {
        let messageDoc = await Message.findByMessage(req.query.message)
        console.log('/getMessage -> ', messageDoc);
        res.json(messageDoc.map(doc => new jcDTO(doc)));
    } catch(err){
        console.error('/getMessage -> ', err);
        throw (err);
    }
});

router.get('/getMessageById', async (req, res) => {
    Message.findOne({_id: req.query.id}, (err, messageDoc) => {
        if (err) {
            console.error('/getMessageById -> ', err);
            throw (err);
        }
        console.log('/getMessageById -> ', messageDoc);
        res.json(new jcDTO(messageDoc));
    });
});

module.exports = router;