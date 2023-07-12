#[test_only] // test only attributes can be attached to modules
module abc { ... }

#[test_only] // test only attributes can be attached to named addresses
address ADDR = @0x1;

#[test_only] // .. to uses
use 0x1::some_other_module;

#[test_only] // .. to structs
struct SomeStruct { ... }

#[test_only] // .. and functions. Can only be called from test code, but not a test
fun test_only_function(...) { ... }