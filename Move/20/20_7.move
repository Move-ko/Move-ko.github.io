module 0x2::a{
    use 0x2::c;
    friend 0x2::b;

    public fun a(){
        c::c()
    }
}

module 0x2::b{
    friend 0x2::c;//오류
        // ^^^^^^ 이 친구 관계는 종속성 사이클을 생성합니다: '0x2::b'는 '0x2::a'의 친구이며 '0x2::c'를 사용하고, '0x2::c'는 '0x2::b'의 친구입니다.
}

module 0x2::c {
    public fun c(){}
}