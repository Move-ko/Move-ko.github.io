address 0x42 {
    module m {
        entry fun foo():u64 {0}//// 유효! entry 함수는 public이 필요하지 않습니다.
    }

    module n {
        fun calls_m_foo():u64 {
            0x42::m::foo()//오류 
        }
    }
}