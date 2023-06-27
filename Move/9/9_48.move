module example::test {
    fun main(){
        let x= 0;
        {
            let x= 1;
            assert!(x==1,42);
        };
        assert!(x==0,42);
    }
}