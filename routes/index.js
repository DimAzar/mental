module.exports = function(app) {
  app.get('/mental', function(req, res) {
	  res.sendFile('public/views/portal.html', { root:__dirname+'/..'}); 
  });
  app.get('/mental/group', function(req, res) {
	  res.sendFile('public/views/index.html', { root:__dirname+'/..'}); 
  });
  app.get('/mental/group/latest', function(req, res) {
	  res.sendFile('public/views/partials/blog.html', { root:__dirname+'/..'});  
  });
  app.get('/mental/group/single-post', function(req, res) {
	  res.sendFile('public/views/partials/single-post.html', { root:__dirname+'/..'}); 
  });
  app.get('/mental/group/templates/:name', function(req, res) {
	  res.sendFile('public/views/templates/'+req.params.name , { root:__dirname+'/..'}); 
  });
};
