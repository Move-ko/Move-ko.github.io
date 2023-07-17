module examaple::bananas {//a naming

use std::vector;//b imports

struct Banana_store has key {//c name
    bushels:vector<Bushel>
}

struct Bushel has store,drop {
    bananas:vector<Banana>
}

use std::signer;

const MAX_BANANA_BUSHELS:u64= 5;
const ETooManyBananas:u64= 1;

public entry fun  buy_fruit_in_bulk(account:&signer,bananas_to_buy:u64)
acquires Banana_store {
  assert!(bananas_to_buy <=MAX_BANANA_BUSHELS,ETooManyBananas);

  while (bananas_to_buy>0){
    buy_banana(account);
    bananas_to_buy= bananas_to_buy -1;
  };
}

struct Banana has store,drop {}

fun buyBanana(buyer:&signer) acquires Banana_store {
    let buyer_address= signer::address_of(buyer);

    if(!exists<Banana_store>(buyer_address)){
        move_to(buyer,
        Banana_store{
            bushels:vector<Bushel>[]
        }
        );
    };

    let Banana_store= borrow_global_mut<Banana_store>(buyer_address);

    let bushels_mut_ref = &mut Banana_store.bushels;
 
    let bushel_new= Bushel {
        bananas:vector<Banana>[
            Banana {},
            Banana {},
            Banana {},
            Banana {},
        ]
    }
    vector::push_back<Bushel>(bushels_mut_ref, bushel_new);
}

}