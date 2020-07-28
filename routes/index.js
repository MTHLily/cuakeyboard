var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('index', { title: 'Custom Mech KBD' });

});

router.get( '/order', function( req, res, next){

	res.render( 'order', {title: 'Order'} );

} );

router.get( '/about', function( req, res, next ){

	res.render( 'about', {title: 'About' } );

} );

module.exports = router;
