module example::test {
    use std::vector::{
    Self,
    Self as V,
    length,
    length as len,
};

    fun pop_twice<T>(v: &mut vector<T>): (T, T) {
        // 위의 use 선언에 따른 모든 옵션 사용 가능
        assert!(vector::length(v) > 1, 42);
        assert!(V::length(v) > 1, 42);
        assert!(length(v) > 1, 42);
        assert!(len(v) > 1, 42);

        (vector::pop_back(v), vector::pop_back(v))
    }
}