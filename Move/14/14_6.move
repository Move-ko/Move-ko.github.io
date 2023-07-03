address 0x42 {
    module m {
        public entry fun foo():u64 {0}
        fun calls_foo():u64 {foo()}//유효
    }
    
    module n {
        fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }


    module other {
        public entry fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }

}

script {
    fun calls_m_foo():u64 {
        0x42::m::foo()//유효
    }
}