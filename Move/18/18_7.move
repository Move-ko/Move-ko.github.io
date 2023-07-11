module exmaple::test {
    struct NoAbilities {}
    struct S has copy,drop {f:bool}
    struct Cup<T>has copy,drop,store {item:T}

    fun unused (){
        Cup<bool>{item:true}//유효함, 'Cup<bool>'은 'drop'을 가집니다.
        Cup<S> { item: S { f: false }};// 유효함, 'Cup<S>'는 'drop'을 가집니다.
    }

    fun left_in_local(c_account:Cup<signer>):u64 {
        let c_b= Cup<bool>{item:true};
        let c_s= Cup<S>{item:S{f:false}};
       // 유효한 반환: 'c_account', 'c_b', 'c_s'는 값을 가지고 있으며
       // 'Cup<signer>', 'Cup<bool>', 'Cup<S>'는 'drop'을 가집니다.
        0
    }

    fun invalid_unused(){
        // 유효하지 않음, 'Cup<NoAbilities>'을 무시할 수 없습니다. 'NoAbilities'는 'drop'을 가지지 않기 때문입니다.
        // 'Cup'은 'drop'으로 선언되었지만, 인스턴스는 'drop'을 가지지 않습니다. 이는 'NoAbilities'가 'drop'을 가지지 않기 때문입니다.
        Cup<NoAbilities>{item:NoAbilities{}};

    }

    fun invalid_left_in_local():u64 {
        let n= Cup<NoAbilities>{item:NoAbilities{}};
        // 유효하지 않은 반환: 'c_n'은 값이 있고 'Cup<NoAbilities>'는 'drop'을 가지지 않습니다.
        0 
    }

}