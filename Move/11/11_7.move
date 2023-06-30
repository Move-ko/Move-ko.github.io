module example::test {
    use std::vector;
    fun check_vec(v:&vector<u64>,bound:u64){
        let i = 0;
        let n = vector::length(v);
        while (i < n){
            let cur = *vector::borrow(v,i);
            assert!(cur <= bound ,42);//
            i = i + 1;
        }
    }
}