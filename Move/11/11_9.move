address 0x42 {
    module example {
        public fun aborts(){
            abort 42
        }
    }
}

script {
    fun always_abort() {
        0x2::example::aborts()
    }
}