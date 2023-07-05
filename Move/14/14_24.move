address 0x42 {
 module example {
    public fun id<T>(x:T):T{x}
 }
}
script {
    use 0x42::example;
    fun call_all() {
        example::id(0);
        example::id<u64>(0);
    }
}