address 0x42 {
module example {

    struct WrappedVector { vec: vector<u64> }

    fun empty(): WrappedVector {
        WrappedVector { vec: std::vector::empty() }
    }

    fun example1(): (WrappedVector, WrappedVector) {
        let vec = {
            use std::vector::{empty, push_back};
            // 'empty'는 이제 std::vector::empty을 가리킵니다.

            let v = empty();
            push_back(&mut v, 0);
            push_back(&mut v, 1);
            push_back(&mut v, 10);
            v
        };
        // 'empty'는 이제 Self::empty을 가리킵니다.
        (empty(), WrappedVector { vec })
    }

    fun example2(): (WrappedVector, WrappedVector) {
        use std::vector::{empty, push_back};
        let w: WrappedVector = {
            use 0x42::example::empty;
            empty()
        };
        push_back(&mut w.vec, 0);
        push_back(&mut w.vec, 1);
        push_back(&mut w.vec, 10);

        let vec = empty();
        push_back(&mut vec, 0);
        push_back(&mut vec, 1);
        push_back(&mut vec, 10);

        (w, WrappedVector { vec })
    }
}
}