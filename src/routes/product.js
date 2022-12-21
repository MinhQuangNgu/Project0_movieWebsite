const router = require('express').Router();
const productController = require('../controllers/productController');
const middleWareController = require('../controllers/middleWareController');

router.delete('/delete/:slug',middleWareController.verifyAdmin,productController.deleteProduct);
router.put('/update/:slug',middleWareController.verifyAdmin,productController.updateProduct);
router.post('/create',middleWareController.verifyAdmin,productController.createProduct);
router.get('/one/:slug',productController.getOne);
router.get('/',productController.getProduct);

module.exports = router;