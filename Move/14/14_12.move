address 0x42 {
    module example{
        struct Counter {
            count:u64
        }
        fun new_counter():Counter {
            Counter {count:0}
        }
    }
}