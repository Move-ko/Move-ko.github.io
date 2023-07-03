module example::test {
    fun smallest_factor(n:u64):u64 {
        //입력이 0 또는 1이 아닌 것으로 가정합니다.
        let i = 2;
        while (i <=n) {
            if (n % i ==0 )break;
            i = i + +1
        }
        i
    }
}