const express = require('express');
const { registerUser, loginUser, updateOneUser, getUserProfile, deleteUser } = require('../controllers/newControllers');
const { addWorker, getWorker, deleteWorker, rateWorker } = require('../controllers/workerController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);
router.put('/update/:id', updateOneUser);
router.delete('/delete/:id', deleteUser);

const workerCategories = ['plumber', 'painter', 'carpenter', 'cleaner', 'electrician', 'mason'];

workerCategories.forEach(category => {
  router.post(`/add${category}`, addWorker);
  router.get(`/get${category}/:adminId`, getWorker);
  router.delete(`/delete${category}/:id`, deleteWorker);
  router.post(`/rate${category}/:workerId`, rateWorker);
});



module.exports = router;
