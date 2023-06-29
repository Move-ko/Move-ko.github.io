module example::test {
    fun main(){
        let i = &0;
        let s = &b"";

        i == s;//오류
        //   ^ '&u64' 유형의 인수가 필요합니다.
    }
}