
module test_addr::coin_flip {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};

    struct Coin has key {
        id: UID,
        status:bool
    }

    public entry fun create(ctx: &mut TxContext) {
        transfer::share_object(Coin {
            id: object::new(ctx),
            owner: tx_context::sender(ctx),
            status: true
        })
    }

    public entry fun flip(coin: &mut Coin) {

        if (status==true)
        counter.status = false;
        else 
        counter.status = true;

    }

}
#[test_only]

module test_addr::coin_flip_test {
  

  #[test]
      fun test_coin_flip() {
        
      }
    
}
