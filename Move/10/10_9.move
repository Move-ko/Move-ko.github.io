module example::test {
    fun main(){
        let v1: vector<u8>= function_that_returns_vector();
        let v2: vector<u8>= function_that_returns_vector();
        assert!(copy v1 == copy v2, 42);
         //     ^^^^       ^^^^
        use_two_vectors(v1,v2);

        let s1: Foo = function_that_returns_large_struct();
        let s2: Foo = function_that_returns_large_struct();
        assert!(copy s1 == copy s2, 42);
         //     ^^^^       ^^^^
        use_two_foos(s1, s2);
    }
}