module example::test {
    fun main(){
        let v = vector::empty();
        vector::push_back(&mut v,100);
        assert!(*vector::borrow(&v,0)==100,42);
    }
}