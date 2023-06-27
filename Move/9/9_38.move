module example::test {
    fun main(){
        let x= 0;
        {
            let y= 1;
        };//y의 scope끝남
        x+y//에러발생
    }
}