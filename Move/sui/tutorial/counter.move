
module test_addr::counter {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};

    struct Counter has key {
        id: UID,
        value: u64
    }

   public fun value(counter: &Counter): u64 {
        counter.value
    }
    fun init(ctx: &mut TxContext) {
        transfer::transfer(Counter {
            id: object::new(ctx),
            value:0,
        }, tx_context::sender(ctx))
    }
    public entry fun increment(counter: &mut Counter) {
        counter.value = counter.value + 1;
    }
  #[test]
    fun test_counter() {
        use sui::test_scenario;
        let user1 = @0xA1;

        let scenario_val = test_scenario::begin(user1);
        let scenario = &mut scenario_val;
        {
            init(test_scenario::ctx(scenario));
        };
        test_scenario::next_tx(scenario, user1);
        {

            let counter_val = test_scenario::take_from_sender<Counter>(scenario);
            let counter = &mut counter_val;

            increment(counter);
            increment(counter);
            increment(counter);
            increment(counter);

            assert!(value(counter) == 4, 0);
            test_scenario::return_to_sender(scenario, counter_val)

        };

       
        test_scenario::end(scenario_val);
    }

}

