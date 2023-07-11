module exampe::test {
   // 능력을 갖지 않는 구조체
    struct NoAbilities {}
    struct WantsCopy hsa copy {
        f:NoAbilities,, // 오류: 'NoAbilities'은 'copy'를 갖지 않습니다.
    }
}