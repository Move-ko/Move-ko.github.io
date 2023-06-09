module overmind::bananas{
    use std::vector;
    use std::signer;

    struct BananaStore has key{
        bushels:vector<Bushel>
    }
    struct Bushel has store,drop{
        bananas:vector<Banana>
    }
    struct Banana has store,drop{

    }

    public entry fun buy_banana(buyer:&signer)acquires BananaStore{
       let buyer_address= signer::address_of(buyer);
       if (!exists<BananaStore>(buyer_address)){
        move_to(
            buyer,
            BananaStore{
                bushels:vector<bushels>[]
            }
        )
       };

       let bananaStore= borrow_global_mut<BananaStore>(buyer_address);

       let bushels_mut_ref= &mut bananaStore.bushels;

       let bushels_new= Bushel{
        bananas:vector<Banana>[
            Banana{},
            Banana{},
            Banana{},
            Banana{}
        ]
       };

       vector::push_back<Bushel>(bushels_mut_ref,bushels_new);
    }

    public entry fun eat_banana(account:&signer)acquires BananaStore{
        let account_address= signer::address_of(account);
        let bananaStore= borrow_global_mut<BananaStore>(account_address);
        let bushels_mut_ref=  &mut bananaStore.bushels;
        let first_bushel= vector::remove<Bushel>(bushels_mut_ref,0);

        let _= vector::pop_back<Banana>(&mut first_bushel.bananas);

        if (vector::length<Banana>(&mut first_bushel.bananas)!=0){
            vector::insert<Bushel>(bushels_mut_ref,0,first_bushel);
        }
    }
}



/*
modules are libraries that define struct types along with functions that operate on these types.You should use them to define global
strage schema and functions for updating to storage.
*/

script{
    use overmind::bananas;
    fun main(account:&signer){
       bananas::buy_banana(account);
    }
}
script{
use overmind::bananas;
fun eat_banana(account:&signer){
    bananas::eat_banana(account);
}
}
/*
Scripts are execitable entrypoints similar to a main function in a conventional language.you should use them wnen you need to interact with published modules
*/
