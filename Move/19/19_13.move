module example::test {
    fun example(): vector<u8> {
        use std::vector::{empty, push_back};

        let v = empty();
        push_back(&mut v, 0);
        push_back(&mut v, 10);
        v
    }
}