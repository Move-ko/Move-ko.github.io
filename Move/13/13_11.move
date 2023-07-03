module example::test {
    fun main(){
        (loop { if (1<10)i= i+1 else break};());
        let () =loop {if (i <10)i= i+1 else break};
    }
}