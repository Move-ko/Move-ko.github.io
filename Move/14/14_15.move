address 0x42 {
    module example {
        use std::vector;

        struct Balance has key { 
            value:u64
        }

        struct Box<T> has key {
            items:vector<T>
        }

        public fun store_two<Item1:store,Item2:store>(
            addr:address,
            item1:Item1,
            item2:Item2,
        )acquires Balance ,Box {
            let balance = borrow_global_mut<Balance>(addr);//acquires 필요
            balance.value= balance.value - 2;
            let box1=borrow_global_mut<Box<Item1>>(addr);//acquires 필요
            vector::push_back(&mut box1.items,item1);
            let box2= borrow_global_mut<Box<Item2>>(addr);//acquires 필요
            vector::push_back(&mut box2,items,item2);
        }

    }
}