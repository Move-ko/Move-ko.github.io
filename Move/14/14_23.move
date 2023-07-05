address 0x42 {
    module example {
        public fun takes_none():u64{0}
        public fun takes_one(x:u64):u64 {x}
        public fun takes_two(x:u64,y:u64):u64{x+y}
        public fun takes_three(x:u64,y:u64,z:u64):u64 {x+y+z}
    }
}

script {
    use 0x42::example;
    fun call_all(){
        example::takes_none();
        example::takes_one(0);
        example::takes_two(0,1);
        example::takes_three(0,1,2);
    }
}