module example::test {
    struct NoAbilities {}
    struct S has copy,drop {f:bool}
    struct Cup<T> has copy,drop,store {item:T}

    fun example(c_x:Cup<u64>,c_:Cup<S>) {
        // 유효함, 'Cup<u64>'은 'u64'이 'copy'를 가지기 때문에 'copy'를 가집니다.
        let c_x2 = copy c_x;
       // 유효함, 'Cup<S>'는 'S'가 'copy'를 가지기 때문에 'copy'를 가집니다.
        let c_s2 = copy c_s;
    }

    fun invalid(c_account:Cup<signer>,c_n:Cup<NoAbilities>){
       // 유효하지 않음, 'Cup<signer>'은 'copy'를 가지지 않습니다.
       // 'Cup'은 'copy'로 선언되었지만, 인스턴스는 'copy'를 가지지 않습니다.
       // 이는 'signer'가 'copy'를 가지지 않기 때문입니다.
       let c_account2= copy c_account;
       // 유효하지 않음, 'Cup<NoAbilities>'은 'copy'를 가지지 않습니다.
       // 'NoAbilities'가 'copy'를 가지지 않기 때문입니다
       let c_n2= copy c_n;
    }
}