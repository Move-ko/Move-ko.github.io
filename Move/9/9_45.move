module example::test {
    fun main(){
        let x= 0;
        assert!(x==0,42);

        let x= 1;//x는 덮어쓰여집니다
        assert!(x==1,42);
    }
}