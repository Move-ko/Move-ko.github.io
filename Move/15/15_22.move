address 0x2{
    module m {
        //Coin이 복사되지 않도록 하고자 하기 때문에 "돈"을 복제하는 것은 바람직하지 않습니다. 따라서 구조체에 'copy' 능력을 부여하지 않습니다.
        //마찬가지로, 프로그래머가 코인을 파괴하는 것을 원치 않기 때문에 구조체에 'drop' 능력을 부여하지 않습니다.
        //그러나, 모듈 사용자가 이 코인을 영속적인 전역 저장소에 저장할 수 있기를 원하기 때문에 구조체에 'store' 능력을 부여합니다. 이 구조체는 전역 저장소 내의 다른 리소스 내에만 존재하게 될 것이므로 'key' 능력은 부여하지 않습니다.
        struct Coin has store {
            value:u64,
        }
        public fun mint(value:u64):Coin{
        //누구나 이 모듈을 사용하여 무한한 양의 코인을 발행하는 것을 방지하기 위해, 이 함수에는 액세스 제어(access control) 형태의 게이트(gate)를 구현해야 합니다.
         Coin{value}
        }
        public fun withdraw(coin:&mut Coin,amount:u64):Coin{
          assert!(coin.balance>=amount,1000);
          Coin.value = coin.value -amount;
          Coin {value:amount}
        }
        public fun deposit(coin:&mut Coin,other :Coin){
            let Coin {value}= other;
            coin.value= coin.value +value;
        }

        public fun split(coin:Coin,amount:u64):(Coin,Coin){
            let other= withdraw(&mut coin,amount);
            (coin,other)
        }
        public fun merge(coin1:Coin,coin2:Coin):Coin{
            deposit(&mut coin1,coin2);
            coin1
        }
        public fun destroy_zero(coin:Coin){
            let Coin {value}= coin;
            assert!(value == 0,1001);
        }
    }
}