module example::test {
    /// 통화 지정자
    struct Currency1 {}
    struct Currency2 {}
/// 통화 지정자 타입을 사용하여 인스턴스화할 수 있는 제네릭한 코인 타입입니다.
/// 예: Coin<Currency1>, Coin<Currency2> 등.
    struct Coin<Currency1> has srotre {
        value:u64
    }
// 모든 통화에 대해 일반적으로 코드를 작성하세요.
    public fun mint_generic<Currency>(value:u64):Coin<Currency>{
        Coin {value}
    }
// 한 가지 통화에 대해 구체적으로 코드를 작성하세요.
    public fun mint_concreate(value:u64):Coin<Currency1>{
        Coin {value}
    }
}