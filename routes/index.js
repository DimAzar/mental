module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

  app.get('/views/:name', function(req, res) {
	    res.sendfile('./public'+req.path+'.jsp'); // load our public/index.html file
	  });
};
