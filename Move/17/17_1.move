module example::test {
    fun id<T>(x:T):T {
        // 이 타입 주석은 필요하지 않지만 유효합니다.
        (x:T)
    }
}