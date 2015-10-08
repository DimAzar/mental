module.exports = function(app) {
  app.get('/mental', function(req, res) {
    res.sendfile('./public/views/portal.html'); 
  });

  app.get('/mental/group', function(req, res) {
	    res.sendfile('./public/views/index.html');
  });

  app.get('/mental/single-post', function(req, res) {
	    res.sendfile('./public/views/single-post.html'); // load our public/index.html file
	  });

  app.get('/mental/group/home', function(req, res) {
	    res.sendfile('./public/views/home.html'); // load our public/index.html file
	  });

  app.get('/mental/news', function(req, res) {
	    res.sendfile('./public/views/blog.html'); // load our public/index.html file
	  });
};
