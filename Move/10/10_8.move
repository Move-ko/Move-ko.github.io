address 0x42 {
    module example {
        struct Coin as store {
            value:u64
        }
        fun swap_if_equal(c1:Coin,c2:Coin):(Coin,Coin) {
            let are_equal = &c1 == &c2 ; //유효
            if (are_equal) (c2,c1) else (c1,c2)
        }
    }
}