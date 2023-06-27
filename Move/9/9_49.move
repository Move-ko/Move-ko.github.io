module example::test {
    fun main(){
        let x= 0;
        {
            let x= b"hello";
            assert!(x==b"hello",42);
        };
        assert!(x==0,42);
    }
}