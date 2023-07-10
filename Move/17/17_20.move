module example::test {
    struct R {}

    fun unsafe_double<T>(x:T) {
        (copy x,x)
        // 오류! x에는 'copy' 능력이 없습니다.
    }

    fun double<T:copy>(x:T) {
        (copy x,x)= //유효
    } 
    
    fun foo():(R,R) {
        let r= R {};
        double<R>(r)
        //     ^ 오류! R에는 'copy' 능력이 없습니다.
    }
}