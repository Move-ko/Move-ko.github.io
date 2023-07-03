address 0x42 {
module m {
    friend 0x42::n;  // friend 선언
    public(friend) fun foo(): u64 { 0 }
    fun calls_foo(): u64 { foo() } // 유효
}

module n {
    fun calls_m_foo(): u64 {
        0x42::m::foo() // 유효
    }
}

module other {
    fun calls_m_foo(): u64 {
        0x42::m::foo() // 오류!
//       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.




    }
}
}

script {
    fun calls_m_foo(): u64 {
        0x42::m::foo() // 오류!
//       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.
    }
}