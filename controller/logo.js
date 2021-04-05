const logo = {
   netflix: function(req, res, next) {
        res.render('index', { title: 'Netflix' });
      }
}

module.exports = logo