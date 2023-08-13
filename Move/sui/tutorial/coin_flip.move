
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
    use sui::test_scenario;
    use test_addr::coin_flip;

  #[test]
      fun test_coin_flip() {
        let owner = @0xC0FFEE;
        let user1 = @0xA1;

        let scenario_val = test_scenario::begin(user1);
        let scenario = &mut scenario_val;


          test_scenario::next_tx(scenario, owner);
        {
            coin_flip::create(test_scenario::ctx(scenario));
        };

      }
    
}
