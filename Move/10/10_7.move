address 0x42 {
    module example {
        struct Coin has store {
            value: u64
        }
        fun invalid(c1:Coin,c2:Coin){
            c1 == c2 //오류발생!!
    //      ^^    ^^ 이러한 리소스들이 파괴될 것입니다!
        }
    }
}