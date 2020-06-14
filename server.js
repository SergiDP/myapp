const express = require('express');
const bodyParser = require('body-parser');
const depsFactory = require("./deps");
const config = require("./config");

class HandlerGenerator {

  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

// Starting point of the server
  let app = express(); // Export app for other routes to use
  let handlers = new HandlerGenerator();
  const port = process.env.PORT || 8000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  // Routes & Handlers
  const dFactory = depsFactory(config);
  app.post('/login', dFactory.login);
  app.get('/', dFactory.middlewareCT(dFactory.checkToken), handlers.index);
  //app.listen(port, () => console.log(`Server is listening on port: ${port}`));


module.exports = app;