// Example Module
//0x42::example 모듈 부분은 example 모듈이 글로벌 저장소의 0x42 주소에 있는 계정 아래에 게시될 것임을 지정합니다
module 0x42::bananas {
//모듈은 명명된 주소(named addresses)를 사용하여 선언할 수도 있습니다. 
//module example_addr::bananas {  => 0x42대신  example_addr로 대체가능
    use std::vector;
    use std::signer;
    
    const ERROR_BANANA: u64 = 1; //*const:모듈의 함수에서 사용할수있는 전용 상수


    struct BananaStore has key {
        bushels: vector<Bushel>
    }

    struct Bushel has store, drop {
        bananas: vector<Banana>
    }

    struct Banana has store, drop {}

    public entry fun buy_banana(buyer: &signer) acquires BananaStore {
        let buyer_address = signer::address_of(buyer);

        if (!exists<BananaStore>(buyer_address)) {
            move_to(
                buyer,
                BananaStore {
                    bushels: vector<Bushel>[]
                }
            );
        };

        let bananaStore = borrow_global_mut<BananaStore>(buyer_address);

        let bushels_mut_ref = &mut bananaStore.bushels;

        let bushel_new = Bushel {
            bananas: vector<Banana>[
                Banana {},
                Banana {},
                Banana {},
                Banana {}
            ]
        };

        vector::push_back<Bushel>(bushels_mut_ref, bushel_new);
    }

    public entry fun eat_banana(account: &signer) acquires BananaStore {
        let account_address = signer::address_of(account);

        let bananaStore = borrow_global_mut<BananaStore>(account_address);
        let bushels_mut_ref = &mut bananaStore.bushels;
        let first_bushel = vector::remove<Bushel>(bushels_mut_ref, 0);

        let _ = vector::pop_back<Banana>(&mut first_bushel.bananas);

        if (vector::length<Banana>(&mut first_bushel.bananas) != 0) {
            vector::insert<Bushel>(bushels_mut_ref, 0, first_bushel);
        }
    }
}

//명명된 주소는 소스 언어 수준에서만 존재하며, 컴파일 중에만 사용되므로, 바이트코드 수준에서 명명된 주소는 해당 값으로 완전히 대체됩니다
script {
    fun example() {
        my_addr::m::foo(@my_addr);
    }
} 
//그리고 my_addr을 0xC0FFEE로 설정하여 컴파일한다면, 실제로 다음과 같이 동작합니다:
//하지만 소스 수준에서는 이러한 코드는 동등하지 않습니다. 함수 m::foo는 my_addr이라는 명명된 주소를 통해 접근되어야 하며, 해당 주소에 할당된 숫자 값으로는 접근할 수 없습니다.
script {
    fun example() {
        0xC0FFEE::m::foo(@0xC0FFEE);
    }
}


//모듈 이름은 영문자 a에서 z 또는 A에서 Z로 시작할 수 있습니다. 첫 번째 문자 이후에는 밑줄(_), 영문자 a에서 z, 영문자 A에서 Z 또는 숫자 0에서 9가 포함될 수 있습니다.
  module my_module {}
  module foo_bar_42 {}

//일반적으로 모듈 이름은 소문자로 시작합니다. my_module이라는 모듈은 my_module.move라는 소스 파일에 저장되어야 합니다.
//모듈 블록 내의 모든 요소는 어떤 순서로든 나타날 수 있습니다. 기본적으로 모듈은 타입과 함수의 집합입니다. use 키워드는 다른 모듈에서 타입을 가져오는 데 사용됩니다. friend 키워드는 신뢰할 수 있는 모듈의 목록을 지정합니다. const 키워드는 모듈의 함수에서 사용할 수 있는 비공개 상수를 정의합니다.

