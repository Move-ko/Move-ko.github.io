module example::test {
    fun safe_sub(x:u64,y:u64):u64 {
        if(x>y)return 0;
        x-y
    }
}