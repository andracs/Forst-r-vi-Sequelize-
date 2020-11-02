var express = require('express');
var router = express.Router();
const db = require('../models'); // new require for db object

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.Role.findAll()
  .then((roles) => {
    let rollerToShow = "";
    //console.log(roles[0].dataValues);
    roles.forEach(element => {
      rollerToShow += element.dataValues.type + ", "
    });
    res.render('index', { 
      title: 'Vi skal tilføje en ORM til vores projekt, og det bliver Sequelize', 
      data: rollerToShow.slice(0, -2) })
    }
  )
  .catch((err) => {
    console.log('There was an error querying contacts', JSON.stringify(err))
    return res.send(err)
  });
});

module.exports = router;
