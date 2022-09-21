'use strict';

const validator = (req, res, next) => {
  let {personName} = req.query;
  res.send(`${personName} : Name`);
  next();

};

module.exports=validator;
