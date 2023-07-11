module example::test {
    use std::vector::empty;
    use std::vector::empty as empty_vec;

    fun new_vecs(): (vector<u8>, vector<u8>, vector<u8>) {
        let v1 = std::vector::empty();
        let v2 = empty();
        let v3 = empty_vec();
        (v1, v2, v3)
    }
}