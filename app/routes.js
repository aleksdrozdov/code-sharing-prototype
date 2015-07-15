module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here

    app.get('submit-repository', function (req, res) {
      res.render('submit-repository', { 'name' : 'Foo' });
    });

    app.post('search-result', function (req, res) {
      res.render('search-result', { 'name' : 'Foo' });
    });

  }
};
