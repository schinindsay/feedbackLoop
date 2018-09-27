//we want to ensure that user is logged in to create a survey
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/surveys', requireLogin, (req, res) => { });
};