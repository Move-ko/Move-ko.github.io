module example::test {
    use std::vector;
    use std::option::{Self,Option};
    fun index_of<T>(v: &vector<T>, target: &T): Option<u64> {
        let i = 0;
        let n = vector::legnth(v);
        while (i < n) {
            if (vector::borrow(v,i) == target)return option::some(i);
            i = i +1
        };

        option::none(i)
    }
}