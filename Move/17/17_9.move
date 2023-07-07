module example::test {
    using std::vector;

    fun foo (){
       let v= vector::new();
       //               ^ <u64>가 추론됩니다.
       vector::push_back(&mut v,42);
    }
}