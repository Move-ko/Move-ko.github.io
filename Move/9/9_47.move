address 0x42 {
    module example {
        struct Coin has store{
            value:u64
        }
        fun unused_resource():Coin{
            let x= Coin { value:0};//에러발생
            //이 로컬에는 여전히 `drop` 기능이 없는 값이 포함되어 있습니다.
            x.value = 1;
            let x= Coin {value:10};
            x//잘못된 반품
        }
    }
}