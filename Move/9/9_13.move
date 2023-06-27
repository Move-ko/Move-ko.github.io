module example::test {
    fun main(){
        let a:u8 = return ();
        let b:bool = abort 0;
        let c:signer = loop ();


        let x= return ();//에러
        //이 유형을 추론할 수 없습니다. 주석을 추가해 보세요.
        let y= abort 0;//에러발생
 //이 유형을 추론할 수 없습니다. 주석을 추가해 보세요.
        let z:loop();//에러
         //이 유형을 추론할 수 없습니다. 주석을 추가해 보세요.
    }
}