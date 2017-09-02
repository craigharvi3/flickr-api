const Main = require('./controllers/main');
const Flickr = require('./models/flickr');

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    const controller = new Main(app);
    return controller.main(req, res, next);
  });

  app.get('/api/photos', (req, res, next) => {
    Flickr.get(req.query.tag)
      .then(
        (response) => res.send(response),
        (err) => res.status(500).send(err)
      )
  });

  // wildcard for 404 handling
  app.get('*', (req, res, next) => {
    const controller = new Main(app);
    return controller.main(req, res, next);
  });

};
