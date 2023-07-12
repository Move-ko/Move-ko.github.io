$ aptos move test --coverage
INCLUDING DEPENDENCY AptosFramework
INCLUDING DEPENDENCY AptosStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING TestExample
Running Move unit tests
[ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes
[ PASS    ] 0x1::my_module::make_sure_zero_coin_fails
[ PASS    ] 0x1::my_module::test_has_coin
Test result: OK. Total tests: 3; passed: 3; failed: 0
+-------------------------+
| Move Coverage Summary   |
+-------------------------+
Module 0000000000000000000000000000000000000000000000000000000000000001::my_module
>>> % Module coverage: 100.00
+-------------------------+
| % Move Coverage: 100.00  |
+-------------------------+
Please use `aptos move coverage -h` for more detailed source or bytecode test coverage of this package