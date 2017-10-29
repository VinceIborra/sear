//=============================================================================
// Name: Sear-Scripts-Tst/all
//
// Auth: Vicente Iborra
//
// Desc: This module runs all the tests.
//=============================================================================
!INC Sear-Scripts-Src.sear
!INC Sear-Scripts-Src.sear_ea_unit

//=============================================================================
// Desc: This section imports all the tests so that they can be run all
//       in one go.  Note that the mode on the testRunner in the
//       module sear.ea.unit is set to "multiple" to inhibit the test
//       modules from running theirs tests as they get loaded.
//=============================================================================

// Configure the default test runner
sear.ea.unit.testRunner.mode = "multiple";
sear.ea.unit.testRunner.testClassDetail = true;
sear.ea.unit.testRunner.testMethodDetail = true;

// Select test modules to run
!INC Sear-Scripts-Tst.sear
//!INC Sear-Scripts-Tst.sear_ea
!INC Sear-Scripts-Tst.sear_ea_unit
!INC Sear-Scripts-Tst.sear_io

//=============================================================================
// Desc: This section runs the tests using the default test runner.
//=============================================================================
sear.ea.unit.testRunner.runTests("multiple");