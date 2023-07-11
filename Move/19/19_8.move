module example::test {
    use std::vector::{push_back, length as len, pop_back};

    fun swap_last_two<T>(v: &mut vector<T>) {
        assert!(len(v) >= 2, 42);
        let last = pop_back(v);
        let second_to_last = pop_back(v);
        push_back(v, last);
        push_back(v, second_to_last)
    }
}