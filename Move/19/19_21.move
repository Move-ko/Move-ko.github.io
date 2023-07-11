module example::test {
    use std::vector::{empty, push_back}; // ERROR!
    //                       ^^^^^^^^^ 사용되지 않은 별칭 'push_back'

    fun example(): vector<u8> {
        empty()
    }
}