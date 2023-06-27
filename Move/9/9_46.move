module example::test {
    fun main(){
       let x =0;
       assert!(x==0,42);

       let x=b"hello";//x는 쉐도우 댑니다
       assert!(x==b"hello",42);
    }
}
   
