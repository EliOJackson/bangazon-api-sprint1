"use strict";
const { getAll, getOne, postOne, putOne, getInactive } = require('../models/Customer');

module.exports.getAllCustomers = (req, res, next) => {
  if (req.url === "/customers/?active=false") {
    getInactive()
    .then((cust) => res.status(200).json(cust))
    .catch((err) => next(err));
  } else {
    getAll()
    .then( (cust) => {
      res.status(200).json(cust);
    })
    .catch( (err) => next(err));
  }
};

module.exports.getOneCustomer = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.postOneCustomer = (req, res, next) => {
  postOne(req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.putOneCustomer = (req, res, next) => {
  console.log("params body request id",req.params, req.body);
  putOne(req.params, req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}
