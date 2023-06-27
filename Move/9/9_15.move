module example::test {
    fun main(){
        let (x,y) = (0,1,2);//에러발생
        let (x,y,z,q) = (0,1,2);//에러발생
    }
}