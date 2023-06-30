module examle::test {
    fun main(){
        assert!(true,1/0)

        if (true) () else (1/0)
    }
}