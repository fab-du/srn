
/* GET home page. */
exports.registration = function(req, res) {
  res.render('registrieren', { title: 'Registration' });
};


exports.processPost = function(req, req){
    console.log("Yeeahh Post for Registration works ");
};



