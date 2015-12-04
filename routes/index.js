module.exports = function(app) {
  app.get('/mental', function(req, res) {
    res.sendfile('./public/views/portal.html'); 
  });
  app.get('/mental/group', function(req, res) {
	    res.sendfile('public/views/index.html');
  });
  app.get('/mental/group/single-post', function(req, res) {
	    res.sendfile('public/views/partials/single-post.html'); 
  });

  app.get('/mental/group/latest', function(req, res) {
	    res.sendfile('public/views/partials/blog.html'); 
  });
  app.get('/mental/group/templates/:name', function(req, res) {
	    res.sendfile('public/views/templates/'+req.params.name); // load our public/index.html file
	  });
};
