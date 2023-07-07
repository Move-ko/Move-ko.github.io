module example::test {
    fun foo(){
        let foo = Foo<bool>{x:0};// 오류입니다! 0은 (bool) 형식이 아닙니다.
        let Foo<address>{x}= foo;// 오류입니다! (bool)은 주소(address)와 호환되지 않습니다.
    }
}