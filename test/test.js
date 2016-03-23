'use strict';

// MODULES //

var tape = require( 'tape' );
var sqrt = require( 'math-sqrt' );
var SQRT_HALF = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof SQRT_HALF, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the square root of 1/2', function test( t ) {
	var expected = sqrt( 1/2 );
	t.equal( SQRT_HALF, expected, 'equals sqrt(1/2)' );
	t.end();
});
