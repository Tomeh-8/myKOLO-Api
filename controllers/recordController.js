const Record = require('../models/recordModel');

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();

    return res.status(200).json({payload: records});
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
}

exports.postRecord = async (req, res) => {
    try {
      const { message, amount, userID } = req.body;
  
      const record = await Record.create(req.body);
    
      return res.status(201).json({payload: record}); 
    } catch (err) {
        return res.status(500).json({error: err.message});
      }
    }
      

  exports.deleteRecord = async (req, res) => {
    try {
      const record = await Record.findById(req.params.id);
  
      if(!record) {
        return res.status(404).json({msg: 'No account found'});
      }
  
      await record.remove();
  
      return res.status(200).json({payload: {}});
    } catch (err) {
      return res.status(500).json({ msg: err.message});
    }
  }