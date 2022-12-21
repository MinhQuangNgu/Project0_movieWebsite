const router = require('express').Router();
const kindController = require('../controllers/kindController');
const middleWareController = require('../controllers/middleWareController');

router.delete('/delete/:slug',middleWareController.verifyAdmin,kindController.deleteKind);
router.put('/update/:slug',middleWareController.verifyAdmin,kindController.updateKind);
router.post('/create',middleWareController.verifyAdmin,kindController.craeteKind);
router.get('/',kindController.getAllKind);

module.exports = router;