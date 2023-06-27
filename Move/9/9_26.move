module example::test {
    fun three():(u64,u64,u64){
        (0,1,2)
    }
    fun main(){
    let (x1, _, z1) = three();
    let (x2, _y, z2) = three();
    assert!(x1 + z1 == x2 + z2, 42);


   }
}