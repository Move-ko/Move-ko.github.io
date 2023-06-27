module example::test {
    fun main(){
      let t = T { f1: 1, f2: 2 };
      let T { f1: local1, f2: local2 } = &mut t;
      // local1: &mut u64
      // local2: &mut u64
    }
}