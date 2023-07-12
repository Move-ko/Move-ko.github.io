module 0x42::m {
    friend Self;//오류
    //     ^^^^ 모듈 자체를 친구로 선언할 수 없습니다.
}
module 0x43::m {
    friend 0x42::M;//오류
        // ^^^^^^^ 모듈 자체를 친구로 선언할 수 없습니다.
}