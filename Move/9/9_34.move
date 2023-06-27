module example::test {
    fun main(){
        let x= 0;
        let t= &mut x;
        *r= 1;
        assert!(x==1,42);
    }
}