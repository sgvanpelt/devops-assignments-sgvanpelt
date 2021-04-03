// Filename: api-routes.js
// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});

// Import user controller
const userController = require('./controllers/users.controller');
// user routes
router
  .route('/users')
  .get(userController.index)
  .post(userController.new);
router
  .route('/user/:user_id')
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
router.route('/user/authenticate').post(userController.authenticate);
router
  .route('/user/changepassword/:user_id')
  .put(userController.changePassword);

// Import Contact controller
const contactController = require('./controllers/contact.controller');
// Contact routes
router
  .route('/contacts')
  .get(contactController.index)
  .post(contactController.new);
router
  .route('/contact/:contact_id')
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// Export API routes
module.exports = router;
