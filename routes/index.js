module.exports = function(app) {
  app.get('*', function(req, res) {
    res.sendfile('./views/index.html'); // load our public/index.html file
  });

};