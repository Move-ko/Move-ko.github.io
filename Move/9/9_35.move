module example::test {
    fun main(){
        let x= 0;
        let y= 1;
        let r= if(cond) &mut x else &mut y;
        *r = *r +1;
    }
}