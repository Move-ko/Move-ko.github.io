module example::test {
    fun main(){
       { let v = vector::empty(); vector::push_back(&mut v, 1); v }
    }
}