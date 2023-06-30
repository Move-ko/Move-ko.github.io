module example::test {
    use std::vector;
    fun pop_twice<T>(v:&mut vector<T>):(T,T){
        assert!(vector::length(v) >= 2,42);//이제 'assert'를 사용합니다.

        (vector::pop_back(v),vector::pop_back(v))                
    }
}