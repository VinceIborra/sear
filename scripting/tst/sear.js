//=============================================================================
// Name: sear
//
// Auth: Vicente Iborra
//
// Desc: This module tests the sear module.
//=============================================================================
!INC Sear-Scripts-Src.sear
!INC Sear-Scripts-Src.sear_io
!INC Sear-Scripts-Src.sear_ea_unit
(function() {

	//=========================================================================
	// Establish namespace
	//=========================================================================
	var NS_STRING = "sear";
	var module = sear.namespace(NS_STRING);

	//=========================================================================
	// Desc: This test class tests methods on the va.ea.Repository class.
	//=========================================================================

	//-------------------------------------------------------------------------
	// Desc: Class constructor.
	//
	// Args: None
	//
	// Retn: N/A
	//-------------------------------------------------------------------------
	module.TestSear = function() {
		this.name = NS_STRING + "." + "TestSear";
	}
	module.TestSear.prototype = new sear.ea.unit.TestClass();

	//-------------------------------------------------------------------------
	// Desc: This test covers the happy path for the findPackage method.
	//
	// Args: None
	//
	// Retn: Nothing
	//-------------------------------------------------------------------------
	module.TestSear.prototype.testNamespacing = function() {
		
		sear.namespace("sear.bob");
		
		this.assertNotNull(sear, "sear shouldn't be null");	
		this.assertNotNull(sear.bob, "sear.bob shouldn't be null");	
		
		this.assertTrue(sear.namespaceDefined("sear"), "sear should be defined");
		this.assertTrue(sear.namespaceDefined("sear.bob"), "sear.bob should be defined");
		this.assertFalse(sear.namespaceDefined("sear.fred"), "sear.fred should not be defined");
	}
	
	//=========================================================================
	// Desc: This section registers the test classes in this module with the
	//       default test runner.
	//=========================================================================
    sear.ea.unit.testRunner.registerTestClasses([
		new module.TestSear
	]);

	//=========================================================================
	// Desc: This section uses the default test runner to run the tests in this
	//       module.  That is, runs the registered tests in single mode.
	//=========================================================================
	sear.ea.unit.testRunner.runTests("single");

})();