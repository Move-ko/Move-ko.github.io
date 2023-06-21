module example::test{
    fun main(){
        let a = @42;  //o
        let b = @0xCAFE;  //o
        let c = @2021;    //o
        let d = @0xbeef;    //o
        let e = 0x1337;  //x
        let f = 28; //x

    }
}