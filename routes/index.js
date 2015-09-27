module.exports = function(app) {
  app.get('/mental', function(req, res) {
    res.sendfile('./public/views/portal.html'); 
  });
  app.get('/mental/group', function(req, res) {
	    res.sendfile('./public/views/index.html');
  });

};
