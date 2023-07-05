module example::test {
    fun main(){
        //둘은 동등합니다
        let baz = Baz {foo:foo};
    
        let baz= Baz {foo};
    }
}