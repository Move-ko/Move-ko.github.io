#[test] // OK
fun this_is_a_test() { ... }

#[test] // Will fail to compile since the test takes an argument
fun this_is_not_correct(arg: signer) { ... }