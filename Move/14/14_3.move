address 0x42 {
    module m {
        fun foo():u64 {0}
        fun calls_foo():u64 {foo() }//유효
    }

    module other {
        fun calls_m_foo():u64 {
            0x42::m::foo()//오류!
         // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
        }
    }
    }
    script {
    fun calls_m_foo(): u64 {
        0x42::m::foo() // 오류!
        // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
    }
}