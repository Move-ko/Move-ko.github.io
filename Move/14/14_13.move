address 0x42 {
    module example {
        struct Balance has key {
            value :u64
        }
        public fun add_balance(s:&signer, value :u64){
            move_to(s,Balance{value})
        }

        public fun extract_balance(addr:address ) :u64 acquires Balance {
            let Balance {value}= move_from(addr);//acquires 필요
            value
        }
    }
}