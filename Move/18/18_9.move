module example::test {
    struct NoAbilities {}
    struct MyResource<T> has key {f:T}

    fun valid(account:&signer) acquires MyResource {
        let addr= signer::address_of(account);

        let has_resource = exists<MyResource<u64>>(addr);
        if(!has_resource){
            move_to(account,MyResource<u64>{f:0})
        };
        let r= borrow_global_mut<MyResource<u64>>(addr)
        r.f= r.f+1;

    }


    fun invalid(account: &signer) {
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    let has_it = exists<MyResource<NoAbilities>>(addr);
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    let NoAbilities {} = move_from<NoAbilities>(addr);
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    move_to(account, NoAbilities {});
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    borrow_global<NoAbilities>(addr);
   }
}