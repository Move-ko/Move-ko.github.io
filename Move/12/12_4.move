module example::test {
    fun main(){
        // x와 y는 u64 정수여야 합니다.
        let maximum:u64 = if(x>y) x else y;
        // 오류! 분기가 다른 타입입니다.
        let z= if (maximum <10 )10u8 else 100u64;
        // 오류! 분기가 다른 타입입니다. 기본적으로 거짓 분기는 u64가 아닌 ()입니다.
        if (maximum >= 10) maximum;
    }
}