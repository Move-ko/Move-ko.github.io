module example::test {
    // 능력을 갖지 않는 구조체
    struct NoAbilities {}

    struct MyResource has key {
        f: NoAbilities, // 오류: 'NoAbilities'은 'store'를 갖지 않습니다.
    }
}