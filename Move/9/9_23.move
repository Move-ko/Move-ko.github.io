module example::test {
    fun main(){
        let t= T {f1 :1,f2:2};
        let T {f1:local1,f2:local2}= &t;
        // local1: &u64
        // local2: &u64
    }
}