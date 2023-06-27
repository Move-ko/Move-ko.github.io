module example::test {
    fun main(){
        let (x:&u64,y:&mut u64)= (&0, &mut 1);//에러발생
    }
}