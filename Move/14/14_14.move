address 0x42 {
    module example {
        struct Balance has key {
            value:u64
        }
       public fun add_balance(s:&signer) {
        move_to(s,Balance{value})
       }


       public fun extract_balance(addr:address):u64 acquires Balance {
            let Balance { value}= move_from(addr);//acquires 필요
            value
        }  
        public fun extract_and_add(sender:address,receiver:&signer)acquires Balance {
            let value = extract_balance(sender);//여기에서는 acquires가 필요합니다.
            add_balance(receiver, value)

        }
    }
}
address 0x42 {
    module other {
        fun extract_balance(addr:address):u64 {
            0x42::example::extract_balance(addr)//acquires이 필요하지 않습니다.
        }
    }
}