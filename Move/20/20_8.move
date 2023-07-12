module 0x42::a {}
module 0x42::m {
    use 0x42::a as aliased_a;
    friend aliased_a;//오류
    // ^^^^^^^^^ 중복된 친구 선언 '0x42::a'입니다. 모듈 내의 친구 선언은 고유해야 합니다.
}