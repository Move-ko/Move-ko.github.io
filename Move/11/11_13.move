module example::test {
    fun main(){
        let b = 
             if(x==0)false
             else if (x==1)true
             else abort 42;
               // ^^^^^^^^ abort 42의 타입은 bool입니다.
    }
}