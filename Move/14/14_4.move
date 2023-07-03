address 0x42 {
    module m {
        public fun foo():u64 {0}
        fun calls_foo():u64 {foo()}//유효
    
    }

    module other {
        fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }
}
script {
    fun calls_m_foo():u64 {
        0x42::m::foo() //유효
    }
}