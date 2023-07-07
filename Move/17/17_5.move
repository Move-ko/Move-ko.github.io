module example::test {
    fun foo(){
        let x= id<u64>(true);//오류입니다! true는 u64 형식이 아닙니다.
    }
}