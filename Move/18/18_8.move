module example::test {
    struct Cup<T> has copy,drop,store{item:T}
// 'MyInnerResource'는 'store'로 선언되어 있으므로 모든 필드가 'store'를 가져야 합니다.
    struct MyInnerResource has store {
        yes:Cup<u64>,// 유효함, 'Cup<u64>'은 'store'를 가집니다.
// no: Cup<signer>, 유효하지 않음, 'Cup<signer>'는 'store'를 가지지 않습니다.
    }

    // 'MyResource'는 'key'로 선언되어 있으므로 모든 필드가 'store'를 가져야 합니다.
    struct MyResource has key {
        yes:Cup<u64>, // 유효함, 'Cup<u64>'은 'store'를 가집니다.
        inner:Cup<MyInnerResource>
// no: Cup<signer>, 유효하지 않음, 'Cup<signer>'는 'store'를 가지지 않습니다.

    }
}