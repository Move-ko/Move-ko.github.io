module example::test {
    struct T {
        f1: u64,
        f2: u64
    }

    fun main(){
        let T {f1 :local1,f2:local2}= T { f1:1, f2:2};
        //local1 : u64
        //local2 : u64
    }
}