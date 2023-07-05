address 0x42 {
    module example {
        public fun zero():u64 {0}
    }
}

script {
    use 0x42::example::{Self,zero};
    fun call_zero(){
        0x42::example::zero();
        example::zero();
        zero();
    }
}