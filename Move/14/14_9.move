module example::test {
    fun id<T>(x:T):T {x}
    fun example<T1:copy,T2>(x:T1,y:T2):(T1,T1,T2){(copy,x,x,y)}
}