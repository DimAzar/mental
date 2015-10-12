module.exports = function(app) {
  app.get('/mental', function(req, res) {
    res.sendfile('./public/views/portal.html'); 
  });

  app.get('/mental/group', function(req, res) {
	    res.sendfile('public/views/index.html');
  });

  app.get('/mental/group/home', function(req, res) {
	    res.sendfile('public/views/partials/home.html'); // load our public/index.html file
  });

  app.get('/mental/group/single-post', function(req, res) {
	    res.sendfile('public/views/partials/single-post.html'); 
  });

  app.get('/mental/group/blog', function(req, res) {
	    res.sendfile('public/views/partials/blog.html'); 
  });
};
