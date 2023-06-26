module example::test {
    fun main(){
        let x;
        let cond= true;
        let i = 0;
        loop {
            (x,cond)= foo(i);
            if (!cond)break;
            i = i + 1;
        }
    }
}