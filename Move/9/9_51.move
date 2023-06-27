module example::test {
    fun main(){
        let x= 1;
        let y= move x +1;
        //로컬을 여기로 옮겼습니다. 
        let z= move x +2;//에러발생
        //    ^^^^^^ 로컬 'x'의 잘못된 사용
        y + z
    }
}