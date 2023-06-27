module example::test {
    fun main(){
        let s = b"hello";
        let foo= Foo{f:0};
        let coin = Coin {value:0};

        let s2= s;//이동
        let foo2= foo;//이동
        let coin2= coin;//이동

        let x =0;
        let b= false;
        let addr= @0x42;
        let x_ref= &x;
        let coin_ref= &mut coin2;

        let x2= x;//복사
        let b2= b;//복사
        let addr2= @0x42;//복사
        let x_ref2= x_ref;//복사
        let coin_ref2= coin_ref;//복사
    }
}