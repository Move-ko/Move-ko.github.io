module example::test {
    fun main(){
        let x = 0;
        x= x+1;
        assert!(x ==1,42);
        {
            x= x+1;
            assert!(x==2,42);
        };
        assert!(x==2,42);

    }
}