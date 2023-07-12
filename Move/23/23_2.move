#[test]
#[expected_failure]
public fun this_test_will_abort_and_pass() { abort 1 }

#[test]
#[expected_failure]
public fun test_will_error_and_pass() { 1/0; }

#[test]
#[expected_failure(abort_code = 0, location = Self)]
public fun test_will_error_and_fail() { 1/0; }

#[test, expected_failure] // Can have multiple in one attribute. This test will pass.
public fun this_other_test_will_abort_and_pass() { abort 1 }